<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">README</h3>

  <p align="center">
    This file walkthroughs the demonstration of Simulation  to jumpstart your projects!
    <br />
    <a href="https://github.com/Abhishek-DP/BevywiseIotSimulation/README"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Abhishek-DP/BevywiseIotSimulation/README">View Demo</a>
    ·
    <a href="https://github.com/Abhishek-DP/BevywiseIotSimulation/issues">Report Bug</a>
    ·
    <a href="https://github.com/Abhishek-DP/BevywiseIotSimulation/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://drive.google.com/file/d/1_mOyGWOO0TosC8LrTmjNG7u0RXqfGGQf/view?usp=drive_link)

Welcome to the Simulation Project! This project is designed to provide an in-depth walkthrough of a simulation process, helping users understand and replicate complex scenarios with ease. Whether you are a researcher, developer, or enthusiast, this project serves as a guide to implementing and analyzing simulations efficiently.
Key Features

✅ Step-by-Step Simulation Process – Easy-to-follow instructions to run and modify the simulation.
✅ Modular and Scalable – Built with reusable components to extend functionality effortlessly.
✅ Optimized Performance – Efficient handling of data and rendering for seamless execution.
✅ User-Friendly Interface – Intuitive design using modern UI frameworks.
✅ Open-Source Collaboration – Contributions and feature requests are always welcome!

This project simplifies simulation complexities, allowing users to grasp the core concepts and customize them according to their needs.

This project is designed to simulate IoT-based environments using a robust stack of modern technologies. It leverages cloud infrastructure, MQTT communication protocols, and web technologies to provide an efficient and scalable simulation experience.

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

This project is powered by the following technologies:

*    AWS EC2 (Ubuntu Free-Tier Version) – Cloud hosting for scalable and reliable deployment.
*    Bevywise IoT Simulation Tool – Provides IoT device simulation for testing and development.
*    Express.js – A fast and lightweight Node.js web application framework.
*    NGINX – Used as a reverse proxy and load balancer for handling web traffic.
*    Aedes MQTT Broker – A high-performance MQTT broker for handling IoT messaging.



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  sudo apt install node -y
  ```

### Installation

1. Create a AWS account [https://console.aws.amazon.com]
2. Create Key pair (login) or use existing once
3. Create a ubuntu instance (with free tier), change the `Configure storage` to min 20 GiB and Launch instance 
   ```sh
   https://ap-south-1.console.aws.amazon.com/ec2/home?region=ap-south-1#LaunchInstances:
   ```
4. Update security group
   ```sh
   https://ap-south-1.console.aws.amazon.com/ec2/home?region=ap-south-1#SecurityGroups:
   ```
   * Edit inbound rules
   * Add rules
   1. Port-1882
     * Type: custom TCP
     * Port range: 1882
     * Source type: Anywhere-IP-V4
   2. Port-80       
     * Type: HTTP
     * Port range: 80
     * Source type: Anywhere-IP-V4  
   3. Port-22
     * Type: SSH
     * Port range: 22
     * Source type: Anywhere-IP-V4
   4. Port-12345       
     * Type: custom TCP
     * Port range: 12345
     * Source type: Anywhere-IP-V4  
   5. Port-8083
     * Type: custom TCP
     * Port range: 8083
     * Source type: Anywhere-IP-V4
  * Once added all the changes click on `Save rules`
6. Once instance is launched click on connect
   ```sh
   https://ap-south-1.console.aws.amazon.com/ec2/home?region=ap-south-1#Instances:
   ```
  * Use SSH client which can be understood by simple means as given by the aws.
  * Copy the Example code and run this on the terminal.
7. 
3. Clone the repo
   ```sh
   https://ap-south-1.console.aws.amazon.com/ec2/home?region=ap-south-1#LaunchInstances:
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your API in `config.js`
   ```JS
   const API_KEY = 'ENTER YOUR API';
   ```



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
