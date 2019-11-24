import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | frank-comp', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:frank-comp');
    assert.ok(controller);
  });
});
