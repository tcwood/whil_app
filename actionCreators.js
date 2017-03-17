export function tester(test) {
  console.log('inside action creator. Test data:', test);
  return { type: 'TEST_REDUX', test };
}
