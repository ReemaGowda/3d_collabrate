import React, { Component } from 'react';
import Popup from 'reactjs-popup';

export default class PopUp extends Component {
  render() {

    return (
      <Popup trigger={<button className="button" id="seeDetail"> </button>} modal>
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="content">
              {' '}
              <p>Country: Russia</p>
             <p>Medals Won: 428</p>
        </div>
            <div className="actions">
              {/* <Popup
                trigger={<button className="button"> Trigger </button>}
                position="top center"
                closeOnDocumentClick
              >
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                  magni omnis delectus nemo, maxime molestiae dolorem numquam
                  mollitia, voluptate ea, accusamus excepturi deleniti ratione
                  sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
              </Popup> */}
              <button id="seeMore" onClick={() => {
                this.props.seeMore();
                close();
              }}>See more</button>
            </div>
          </div>
        )}
      </Popup>
    )
  }
}