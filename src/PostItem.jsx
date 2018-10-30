import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const PostItem = (props) => (
   <article className="post__item">
      { props.item.company_logo &&
         <div className="post__item--img">
            <img src={props.item.company_logo} alt={`Brand logo for ${props.item.company}`}/>
         </div>}
      <div className="post__content">
         <Link to={{
           pathname: `/detail/${props.item.id}`,
           state: {
              post: props.item
           }
         }}>
            <h2 className="post__title">{props.item.title}</h2>
         </Link>
         <p className="post__company">{props.item.company}</p>
         <span className="post__location">{props.item.location}</span>
      </div>
      <aside className="post__date">
         <span className="data">{props.item.created_at}</span>
         <FontAwesomeIcon icon="clock" className="icon" />
      </aside>
   </article>
);

PostItem.propTypes = {
   item: PropTypes.object.isRequired
}

export default PostItem;