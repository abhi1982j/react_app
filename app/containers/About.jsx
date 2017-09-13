import React from 'react';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = (props) => {
  return (
    <div >
        {"This data is rendering from Ajax response"}
        <ul>
        {Object.keys(props.userList).map((key, index)=>{
            return(
                 <li key={props.userList[key].id}>{props.userList[key].name + "  "} {props.userList[key].phone}</li>
            )
        })}
        </ul>
    </div>
  );
};

export default About;
