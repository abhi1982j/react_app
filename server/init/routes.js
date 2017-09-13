/**
 * Routes for express app
 */
import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import {controllers, passport as passportConfig} from '../db';
import axios from "axios";


const Prismic = require('prismic-nodejs');
const PrismicDOM = require('prismic-dom');
const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();


const usersController = controllers && controllers.users;
const topicsController = controllers && controllers.topics;
const prismicApiEndPoint = 'https://freshmart.lclimited-cms.com/api';

export default (app) => {
    // user routes
    if (usersController) {
        app.post('/sessions', usersController.login);
        app.post('/users', usersController.signUp);
        app.delete('/sessions', usersController.logout);
    } else {
        console.warn(unsupportedMessage('users routes'));
    }
    app.get("/about", (req, res, next) => {
        axios.get("http://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                res.apiResponse = response.data;
                next();
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    /*app.get("/test", (req, res, next) => {
     axios.get("http://jsonplaceholder.typicode.com/users")
     .then(function (response) {
     res.apiResponse = response.data;
     next();
     })
     .catch(function (error) {
     console.log(error);
     });
     });*/

    const linkResolver = (doc, ctx) => {
        if (doc.type == 'blog') {
            return '/blog';
        }
        if (doc.type == 'post') {
            return '/blog/' + encodeURIComponent(doc.uid);
        }

        return '/';
    };

    app.use(function (req, res, next) {
        res.locals.ctx = {
            endpoint: prismicApiEndPoint,
            linkResolver: linkResolver,
        };
        // add PrismicDOM in locals to access them in templates.
        res.locals.PrismicDOM = PrismicDOM;
        next();
    });

    // Initialize the prismic.io api
    function initApi(req) {
        return Prismic.getApi(prismicApiEndPoint, {
            req: req
        });
    }

    app.get('/test', function (req, res, next) {
        initApi(req).then(function (api) {
            api.query(
                Prismic.Predicates.at('document.type', 'terms')
            ).then(function (response) {
                res.apiResponse = {prismicHTML: response.results[0]};
                next();
            }, function (err) {
                console.log("Something went wrong: ", err);
            });
        });
    });


    if (passportConfig && passportConfig.google) {
        // google auth
        // Redirect the user to Google for authentication. When complete, Google
        // will redirect the user back to the application at
        // /auth/google/return
        // Authentication with google requires an additional scope param, for more info go
        // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
        app.get('/auth/google', passport.authenticate('google', {
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        }));

        // Google will redirect the user to this URL after authentication. Finish the
        // process by verifying the assertion. If valid, the user will be logged in.
        // Otherwise, the authentication has failed.
        app.get('/auth/google/callback',
            passport.authenticate('google', {
                successRedirect: '/',
                failureRedirect: '/login'
            })
        );
    }

    // topic routes
    if (topicsController) {
        app.get('/topic', topicsController.all);
        app.post('/topic/:id', topicsController.add);
        app.put('/topic/:id', topicsController.update);
        app.delete('/topic/:id', topicsController.remove);
    } else {
        console.warn(unsupportedMessage('topics routes'));
    }
};
