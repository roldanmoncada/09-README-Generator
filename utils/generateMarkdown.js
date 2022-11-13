// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `[![license](https://img.shields.io/badge/license-${license}-blue.svg)](https://shields.io)`
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n[${license}](#license)\n
    `
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This is licensed under the ${license} license.
    `
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description:
  ${data.description}
  
  ## Table of Contents:
  - [Description](#description)
  - [Installation](#install)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contrib)
  - [Tests](#tests)
  - [Questions](#github)

  ## Installation:

  ${data.install}

  ## Usage:

  ${data.usage}

  ## License: 
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}


  ## Contributing:

  ${data.contrib}

  ## Tests

  ${data.tests}

  ## Questions:

  Here is a link to my GitHub portfolio! [${data.github}](https://github.com/${data.github})

  If you have any questions at all, please feel free to email me at: [${data.email}](mailto:user@example.com)`;
}

module.exports = generateMarkdown;
