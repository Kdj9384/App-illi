import '../router/Project.css'
import React from 'react';

export default function EducationBox({ Education }){
    if(Education.index % 2 == 0){
        return(
            <div className="cntbox" >
                <div className="cntbox-img">
                    <img src={Education.EduPicURL} alt="proj2"></img>
                </div>
                <div className="cntbox-text">
                    <p className="cntbox-title">
                        {Education.EduTitle}
                    </p>
                    <div className="cntbox-cnt">
                        {Education.EduTitle}
                    </div>
                </div>

            </div>
        )
    }
    else{
        return(
            <div className="cntbox-reverse">
                <div className="cntbox-img">
                    <img src={Education.EduPicURL} alt="proj1"></img>
                </div>
                <div className="cntbox-text">
                    <p className="cntbox-title">
                        {Education.EduTitle}
                    </p>

                    <div className="cntbox-cnt">
                        {Education.EduTitle}
                    </div>
                </div>
            </div>
        )
    }
}