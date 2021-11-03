import React from 'react';

function InlineAd(props: {
  content: React.ReactNode;
  labelText: string;
  link: string;
}) {
  return (
    <div>
      <Label>{props.labelText}</Label>
      <div className="container">
        <div></div>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

function Label(props: { children: React.ReactNode }) {
  return <div>{props.children}</div>;
}

export default InlineAd;
