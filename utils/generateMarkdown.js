function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  
  function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
    return `* [License](#license)`;
  }
  
  function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
    return `## License
  
  This project is licensed under the ${license} license.`;
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions, please reach out to me at [${data.email}](mailto:${data.email}). You can also find me on GitHub: [${data.github}](https://github.com/${data.github}).
  `;
  }
  
  export default generateMarkdown;