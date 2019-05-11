import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props;
  return(
      <div className="section z-depth-1">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Notifications</span>
            <ul className="notifications">
              { notifications && notifications.map(notification => {
                return (
                  <li key={notification.id}>
                    <span className="black-text">{ notification.user } </span>
                    <span className="teal-text darken-4"> { notification.content }</span>
                    <div className="grey-text note-date">{ moment(notification.time.toDate()).fromNow() }</div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
  )
}


export default Notifications;
