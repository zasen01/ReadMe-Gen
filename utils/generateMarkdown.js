// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "mit"){
    return "![MIT](https://img.shields.io/badge/License-MIT-blue)"
  }else if(license === "apache 2.0"){

  }else if(license === "gpl"){

  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "mit"){
    return " For more information please visit [MIT License Information](https://img.shields.io/badge/License-MIT-blue)"
  }else if(license ==="apache 2.0"){
    return " "
  }else if(license === "gpl"){
    return ""

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
