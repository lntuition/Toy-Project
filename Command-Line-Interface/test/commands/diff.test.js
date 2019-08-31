const { expect, test } = require('@oclif/test');

describe('diff', () => {
  const errorCommands = [
    ['diff'],
    ['diff', '06:40']
  ]

  errorCommands.forEach(command => {
    test
      .command(command)
      .catch(Error)
      .it('runs ' + command.join(' '));
  });

  test
    .stdout()
    .command(['diff', '06:40', '08:20'])
    .it('runs diff 06:40 08:20', context => {
      expect(context.stdout).to.contain('01:40');
    });

  test
    .stdout()
    .command(['diff', '09:20', '06:40'])
    .it('runs diff 09:20 06:40', context => {
      expect(context.stdout).to.contain('-02:40');
    });
});
