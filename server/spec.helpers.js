process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./index');
const should = chai.should();

chai.use(chaiHttp);

const { describe, before, it } = require ('mocha');
const assert = require('assert');

const dummyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE0Y2I0ODc1LWFjNjEtNGVhNi1iMGU5LWZhYjU5MmVkOWNlMyIsImNyZWF0ZWRBdCI6IldlZCwgMDcgRGVjIDIwMTYgMDE6MTU6NTAgR01UIiwidXBkYXRlZEF0IjpudWxsLCJlbWFpbCI6IkJqYXJuZSBTdHJvdXN0cnVwIiwibmFtZSI6IkJqYXJuZSBTdHJvdXN0cnVwIiwiaWF0IjoxNDgxMDg0MTI5fQ.cPwsgR566sUIRksoRovlZnRoNEaTGHVUqFSemfGZitI"

const authHeader = ['authorization', 'Basic ' + dummyToken];
const authQueryToken = {token:dummyToken}

module.exports = {
  chai,
  chaiHttp,
  server,
  should,
  describe,
  before,
  it,
  assert,
  authHeader,
  authQueryToken
}
