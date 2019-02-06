# v-addable-files
A Vue directive that allows you to input multiple files.

# Installation

    npm i v-addable-files --save
    
# Usage

## Basic way

    <input type="file" v-addable-files="files" multiple>

    new Vue({
        el: '#app',
        data: {
            files: []
        }
    })

## with Maximum

    <input type="file" v-addable-files="files" max="5" @too-many="onError" multiple>

    new Vue({
        el: '#app',
        data: {
            files: []
        },
        methods: {
            onError: function(e) {

                console.log('Too many!', e.detail)

            }
        }
    })

# License

This package is licensed under the MIT License.

Copyright 2018 Sukohi Kuhoh