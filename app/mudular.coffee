root = window || exports
root.module = (name) ->
  root[name] = root[name] or {}
  root[name]

