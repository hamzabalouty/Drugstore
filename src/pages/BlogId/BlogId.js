import React from "react";
import "./BlogId.css";
import { useParams } from "react-router-dom";
import { blogData } from "../../data";

const ReadPage = () => {
  const { id } = useParams();
  const product = blogData.find((p) => p.id === +id);
  const { img, title, desc } = product;

  return (
    <div className="readpage">
      <div className="readpage-container">
        <div className="blog-header">
          <h2>{title}</h2>
          <p>
            Home<span>/</span>Treatment<span>/</span>
            {title}
          </p>
        </div>
        <div className="readpage-body">
          <img src={img} />
          <button className="readpage-btn">Posted by: Ram</button>
          <div className="readpage-gap">
            <div className="readpage-gap-left">
              <h2>
                Neque accumsan mi quam <br />
                placerat purus
              </h2>
              <p>1. Ligula phasellus mauris hymenaeos</p>
              <p>2. Felis ridiculus gravida nulla maecenas.</p>
              <p>3. Sit libero penatibus pellentesque volutpat</p>
              <p>4. Habitant arcu venenatis diam.</p>
            </div>
            <div className="readpage-gap-right">
              <h2>Lobortis rutrum amet enim</h2>
              <div className="readpage-progress">
                <div className="progress-val-t">
                  <p>Development 90%</p>
                </div>
              </div>
              <div className="readpage-progress">
                <div className="progress-val-m">
                  <p>Design 80%</p>
                </div>
              </div>
              <div className="readpage-progress">
                <div className="progress-val-b">
                  <p>Marketing 70%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="readpage-imgs">
            <img src="https://medik.wpengine.com/wp-content/uploads/2019/01/blog1-1024x648.jpg" />
            <img src="https://medik.wpengine.com/wp-content/uploads/2019/01/blog2-1024x648.jpg" />
            <img src="https://medik.wpengine.com/wp-content/uploads/2019/01/blog4-1024x648.jpg" />
            <img src="https://medik.wpengine.com/wp-content/uploads/2019/01/blog5-1-1024x648.jpg" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris
            laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet
            interdum felis nibh a leo. Donec efficitur velit ac nisi rutrum, eu
            ornare augue tristique. Vivamus accumsan nisl id massa finibus
            aliquet. Pellentesque blandit ut urna dignissim pulvinar. Aliquam in
            ultrices ante. Nam condimentum eleifend consectetur. Fusce quam
            nunc, bibendum eget venenatis a, volutpat at ligula. Ut interdum
            elit vel ante tincidunt mattis. Aenean dignissim vulputate justo,
            sed tincidunt sapien laoreet a. Fusce vehicula, turpis sed hendrerit
            gravida, ante justo accumsan nisi, non congue metus risus a lorem.
          </p>
          <p>
            Quisque eleifend velit id metus ullamcorper tristique. Integer vel
            commodo ex. Pellentesque sed ultrices tellus. Integer lobortis et
            lorem vitae ullamcorper Tempus interdum ligula proin aptent ornare
            eu Pede, dignissim lacinia odio arcu augue platea habitant nibh
            lectus. Platea nostra. Aliquam posuere fringilla aptent quisque
            consectetuer. Bibendum et amet. Nisl. Luctus. Eros malesuada
            facilisis
          </p>
          <p>
            Montes dapibus cras nulla tortor taciti pede suspendisse vel
            consectetuer nascetur non lorem tempus tempus lacinia odio, netus
            cursus, nunc mi ipsum volutpat ad mus ullamcorper id neque conubia
            cras praesent suspendisse hac, senectus lorem curabitur. Dictum
            etorta aliquam integer lobortis augue. Nisi orci habitant orci
            risus.
          </p>
          <hr />
          <p>
            <span>Tags :</span> Baby Care, Youtube
          </p>
          <h1>Leave a Comment</h1>
          <div className="readpage-form">
            <div className="readpage-form-top">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <textarea placeholder="Comment"></textarea>
            <button>Post Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadPage;
