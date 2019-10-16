import React from "react";
import aboutImg from "../../../static/assets/images/about/joseph-green.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          backgroundImage: `url(${aboutImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
        culpa iste. Facilis esse, atque consequuntur quis possimus magni fugiat
        aliquam repellat ipsum porro, nisi temporibus labore fugit illum sit
        maxime? Consectetur quisquam dolores laborum impedit, alias optio odio
        dicta veritatis incidunt, eveniet laboriosam numquam sequi tempora?
        Nemo, provident recusandae eius ex cum, saepe laboriosam similique iure,
        earum vel corporis quis. Fugit in maiores necessitatibus, modi ad
        numquam ipsum mollitia aliquam, expedita porro, sint iure et tempore
        officia dicta magni reiciendis pariatur voluptas iusto nulla autem. Id
        quod iure similique amet! Explicabo perspiciatis quos totam beatae dolor
        laborum optio labore alias praesentium sint pariatur, ab illo earum ut
        odit sapiente modi aut vitae nostrum dolorum et quisquam facilis.
        Perspiciatis, expedita quidem? Unde maxime itaque distinctio cupiditate
        numquam, facilis repellat suscipit beatae iure nesciunt magnam autem
        recusandae in quibusdam eos consectetur iste expedita, qui a. ?
      </div>
    </div>
  );
}
