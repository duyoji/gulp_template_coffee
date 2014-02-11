do (window) ->
    main = (event) ->
        window.removeEventListener 'load', main
        alert 'loaded!!!'

    window.addEventListener 'load', main
