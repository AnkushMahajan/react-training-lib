const fs = require('fs');
const path = require('path');

const {
  accountsList,
  messageThreads,
  currentUser,
  potentialRecipients,
} = require(path.join(__dirname, '../dist/fixtures'));

function cleanDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    fs.unlinkSync(path.join(dir, file))
  });
}

function recMkdirSync(dir) {
  if (fs.existsSync(dir)) {
      return
  }

  try {
      fs.mkdirSync(dir)
  } catch(err) {
    if(err.code == 'ENOENT') {
        recMkdirSync(path.dirname(dir)) //create parent dir
        recMkdirSync(dir) //create dir
    }
  }
}

function writeFile(file, content) {
  fs.writeFile(file, content, function (err) {
    if (err) return console.log(err);
  });
}

const staticFixtures = path.join(__dirname, '../dist/static-fixtures')

// File Paths
const accountsPath = path.join(staticFixtures, 'accounts.json')
const messageThreadsPath = path.join(staticFixtures, 'messages.json')
const usersPath = path.join(staticFixtures, 'users.json')

// File Contents
const accountsFile = JSON.stringify({accountsList});
const messageThreadsFile = JSON.stringify({messageThreads});
const usersFile = JSON.stringify({currentUser, potentialRecipients})


recMkdirSync(staticFixtures)
cleanDir(staticFixtures)

writeFile(accountsPath, accountsFile)
writeFile(messageThreadsPath, messageThreadsFile)
writeFile(usersPath, usersFile)


