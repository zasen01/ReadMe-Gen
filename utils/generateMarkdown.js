// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "mit"){
    return "![MIT](https://img.shields.io/badge/License-MIT-blue)"
  }else if(license === "apache 2.0"){
    return "![Apache](https://img.shields.io/badge/License-APACHE%202.0-green)"

  }else if(license === "gpl"){
    return "![gpl](https://img.shields.io/badge/License-GPL-yellow)"

  }else {
    return "";
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "mit"){
    return " For more information please visit [MIT License Information](https://opensource.org/licenses/MIT)"
  }else if(license ==="apache 2.0"){
    return " For more information please visit [Apache 2.0 License Information](https://opensource.org/licenses/Apache-2.0)"
  }else if(license === "gpl"){
    return "For more information please visit [GPL License Information](https://opensource.org/licenses/gpl-license)"

  }else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none'){
    return "";
  }else{
    return "* [License](#license)"
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Test](#test)
* [Questions](#questions)
* [Contributors](#contributors)
${renderLicenseSection(data.license)}

### Description
${data.description}
### Installation
${data.installation}
### Usage
${data.usage}
### Test
${data.test}
### Questions
For questions please contact: [${data.contact}](https://github.com/${data.contact})
### Contributors
${data.contribution}

${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
