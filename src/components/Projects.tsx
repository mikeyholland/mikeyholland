import React from 'react';
import { SanityDocument } from 'next-sanity';
import 'swiper/css';

import { sanityFetch } from '../../sanity/client';
import Project, { ProjectType } from './Project';

const PROJECTS_QUERY = `
  *[_type == "project"]| order(orderRank){
    ...,
    'videosWithLabels': videosWithLabels[] {
      _type == 'reference' => @-> {
        ...,
        video {
          asset-> {
            playbackId,
            assetId,
            data {
              ...,
            }
          }
        }
      }
    }
  }
`;

export default async function Projects() {
  const projects = await sanityFetch<SanityDocument>({
    query: PROJECTS_QUERY,
  });

  return projects.map((project: ProjectType) => (
    <Project key={project.name} project={project} />
  ));

  // return projects.map((project: ProjectType) => {
  //   const videos = project.videosWithLabels;
  //   return (
  //     <Project key={project.name} project={project}>
  //       {videos.map((video, index) => (
  //         <div>
  //           <p className="text-xs mb-2">
  //             {index + 1}. {video.title}
  //           </p>
  //           <VideoBorder>
  //             <Video
  //               video={video.video.asset}
  //               key={video.video.asset.assetId}
  //             />
  //           </VideoBorder>
  //         </div>
  //       ))}
  //     </Project>
  //   );
  // });
}
