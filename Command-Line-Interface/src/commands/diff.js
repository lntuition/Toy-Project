const { Command } = require('@oclif/command');
const moment = require('moment');

class DiffCommand extends Command {
  async run() {
    const { args } = this.parse(DiffCommand);
    let diffMinute = moment(args.endTime, 'HH:mm').diff(moment(args.startTime, 'HH:mm'), 'minutes');

    let sign = '';
    if (diffMinute < 0) {
      diffMinute = -diffMinute;
      sign = '-';
    }
    let hour = String(parseInt(diffMinute / 60)).padStart(2, '0');
    let minute = String(diffMinute % 60).padStart(2, '0');

    this.log(sign + hour + ":" + minute);
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