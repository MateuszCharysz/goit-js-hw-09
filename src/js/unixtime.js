// unix time module
'use strict';

const init = () => Date.now();
const fromUnix = unix => new Date(unix);
const toUnix = date => Date.parse(date);

const Unix = { init, fromUnix, toUnix };

export default Unix;

//import Unix from "unix.js"

// const u = Unix.init()
// const date = Unix.fromUnix(u)
// date.getMonth() +1
