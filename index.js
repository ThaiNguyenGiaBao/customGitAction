const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `my-input` input defined in action metadata file
  const myInput = core.getInput('my-input');
  console.log(`Input: ${myInput}`);

  // Perform action logic
  const myOutput = `Processed: ${myInput}`;
  core.setOutput('my-output', myOutput);
} catch (error) {
  core.setFailed(error.message);
}
