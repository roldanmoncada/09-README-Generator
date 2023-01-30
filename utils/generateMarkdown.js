// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None of the Above') {
      return `[![license](https://img.shields.io/badge/license-${license}-blue.svg)](https://shields.io)`
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)'
  
  } else if (license === 'Apache') {
    return '[Apache](https://opensource.org/licenses/Apache-2.0)'
  
  } else if (license === 'GPL') {
    return '[GPL](https://opensource.org/licenses/gpl-license)'
  
  } else if (license === 'BSD'){
    return '[BSD](https://opensource.org/licenses/BSD-3-Clause)'
  
  } else {
    return ''
  }
  };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None of the Above') {
    return `Please visit this link for more information: `
  
  } else {
  return ''; 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)} 

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
  ${renderLicenseSection(data.license)}${renderLicenseLink(data.license)} 


  ## Contributing:

  ${data.contrib}

  ## Tests:

  ${data.tests}

  ## Questions:

  Here is a link to my GitHub portfolio! [${data.github}](https://github.com/${data.github})

  If you have any questions at all, please feel free to email me at: [${data.email}](mailto:user@example.com)`;
}

module.exports = generateMarkdown;
