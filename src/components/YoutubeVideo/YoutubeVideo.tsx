import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  videoId: string;
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* Maintain 16:9 aspect ratio */
`;

const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  margin: 0;
`;

export const YoutubeVideo: React.FC<Props> = ({
  className,
  videoId,
}): React.ReactElement => {
  // https://www.youtube.com/feeds/videos.xml?channel_id=UC2wWdpJ8CQaulB44RLZ4gWw
  // https://www.youtube.com/watch?v=LpCuWV_BD38
  return (
    <Container className={className}>
      <IFrame
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
};
