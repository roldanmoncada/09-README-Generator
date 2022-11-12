// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
      `
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n*[license](#license)\n
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
  ## Title:
  # ${data.title}

  ## Description:

  ${data.description}
  
  # Table of Contents

  This will the be info in the table of contents

  # Installation:

  ${data.install}

  # Usage:

  ${data.usage}

  # License: 
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}


  # Contributing:

  ${data.contrib}

  # Tests

  ${data.tests}

  # Questions:

  Here is a link to my GitHub portfolio!
  ${data.qs-github}

  If you have any questions at all, please feel free to email me at:
  ${data.qs-email}

`;
}

module.exports = generateMarkdown;
