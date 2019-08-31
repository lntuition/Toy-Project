const { Command } = require('@oclif/command');

class DiffCommand extends Command {
  async run() {
    const { args } = this.parse(DiffCommand);

    this.log(args)
  }
}

DiffCommand.description = `Print difference between two times`;
DiffCommand.args = [
  {
    name: 'startTime',
    required: true,
  },
  {
    name: 'endTime',
    required: true,
  },
]

module.exports = DiffCommand;