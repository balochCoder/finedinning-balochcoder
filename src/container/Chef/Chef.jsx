import React from 'react';
import {images} from '../../constants';
import './Chef.css';
import {SubHeading} from "../../components";

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt="chef"/>
    </div>
      <div className='app__wrapper_info'>
          <SubHeading title="Chef's Word"/>
          <h1 className="headtext__cormorant"> What we believe</h1>

          <div className='app__chef-content'>
              <div className="app__chef-content_quote">
                  <img src={images.quote} alt="quote"/>
                  <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <p className="p__opensans">Doloremque hic laboriosam officia saepe sint. Accusamus ad delectus dicta dolorum fuga incidunt neque officiis quae, qui quibusdam, quod sapiente similique voluptates.</p>
          </div>
          <div className='app__chef-sign'>
              <p>Kevin Luo</p>
              <p className="p__opensans">Chef & Founder</p>
              <img src={images.sign} alt="sign"/>
          </div>
      </div>
  </div>
);

export default Chef;
