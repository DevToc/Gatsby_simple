import { PageProps, HeadFC } from "gatsby";
import * as React from 'react';





 
const AboutPage:React.FC<PageProps> = () => {
  return (
    <div>
      About
    </div>
  );
}
 
 
export default AboutPage;

export const Head:HeadFC = ()=><title>About</title>