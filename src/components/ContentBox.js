import '../router/Project.css'
import React from 'react';

export default function ContentBox({ Project }){
    if(Project.index % 2 == 0){
        return(
            <div className="cntbox">
              <div className="cntbox-img">
                <img src={Project.PictureURL} alt="cnt1"></img>
              </div>

              <div className="cntbox-text">
                <p className="cntbox-title">{Project.Title}</p>
                <div className="cntbox-cnt">
                    <p>{Project.Explain}</p>
                    <p>{Project.SubExplain}</p>
                  <button src = {Project.URLLink}>{Project.ButtonText}</button>
                </div>
              </div>
            </div>
        )
    }
    else{
        return(
            <div className="cntbox-reverse">
              <div className="cntbox-img">
                <img src={Project.PictureURL} alt="cnt2"></img>
              </div>

              <div className="cntbox-text">
                <p className="cntbox-title">
                {Project.Title}
                </p>
                <div className="cntbox-cnt">
                    <p>{Project.Explain}</p>
                    <p>{Project.SubExplain}</p>
                  <button src = {Project.URLLink}>{Project.ButtonText}</button>
                </div>
              </div>
            </div>
        )
    }
}