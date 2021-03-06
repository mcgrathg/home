/**
 *
 * VideoDetail
 *
 */

import React, { PropTypes } from 'react';

import ReadMore from 'containers/ReadMore';
import LoadingIndicator from 'components/LoadingIndicator';
import H2 from 'components/H2';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';

import styles from './styles.css';

function VideoDetail({ video, truncateLongText }) {
  if (!video) {
    return <LoadingIndicator />;
  }

  const { videoId } = video.snippet.resourceId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  const getVideoDescription = () => {
    const splitDescr = video.snippet.description
      .split('\n')
      .map((line, i, arr) => {
        const result = [<span key={i}>{line}</span>];

        if (i !== arr.length - 1) {
          result.push(<br key={`br${i}`} />);
        }

        return result;
      });

    let description;
    if (truncateLongText) {
      description = <ReadMore lines={4}>{splitDescr}</ReadMore>;
    } else {
      description = splitDescr;
    }
    return description;
  };

  return (
    <div className={styles.videoDetail}>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen />
      </div>
      <Card className={styles.card}>
        <CardHeader className={styles.cardHeader}>
          <H2 disableBorder>{video.snippet.title}</H2>
        </CardHeader>
        <CardBody>
          <p className={styles.description}>{getVideoDescription()}</p>
        </CardBody>
      </Card>
    </div>
  );
}

VideoDetail.defaultProps = {
  truncateLongText: false,
};

VideoDetail.propTypes = {
  video: PropTypes.object,
  truncateLongText: PropTypes.bool,
};

export default VideoDetail;
