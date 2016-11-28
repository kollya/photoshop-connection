/*
 *
 *  Photoshop-Connection
 *  Node.js module for connecting to Adobe Photoshop Server.
 *  Author: Antonio Gomez (https://github.com/antonio-gomez)
 * 
 *
 *  @link https://github.com/antonio-gomez/photoshop-connection
 *  @version v0.0.0
 *  @license MIT
 *
 */

'use strict'

const photoshop = require('./vendor/Photoshop')

export class PhotoshopClient {
    constructor(options) {
        this.options = options
    }
}