import * as React from 'react';

const Slider = require('react-slick').default;

interface IProps {
  s3Folder: string;
  numImages: number;
  onEnd: any;
}

const Slideshow = (props: IProps): JSX.Element => {
  const settings = {
    dots: true,
    infinite: false,
    afterChange: (currentSlide: number) => {
      if (currentSlide === props.numImages - 1) {
        props.onEnd();
      }
    },
  };

  const imageNodes = [];
  for (let i = 1; i <= props.numImages; i++) {
    imageNodes.push(<div key={i}><img src={props.s3Folder + i.toString() + '.jpg'} /></div>);
  }

  return <Slider {...settings}>{imageNodes}</Slider>;
};

export default Slideshow as any;
