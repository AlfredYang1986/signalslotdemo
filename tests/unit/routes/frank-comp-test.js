import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | frank-comp', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:frank-comp');
    assert.ok(route);
  });
});
