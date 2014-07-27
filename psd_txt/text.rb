require 'psd'
require "json"
require "pp"

path = 'test.psd'

hash = PSD.open(path) do |psd|
	psd.tree.to_hash
end

hash.keys

hash[:document]
hash[:children]

File.open(File.expand_path("./text.json"), "w") do |file|
	file.print hash[:children].to_json
end

puts hash[:children].to_s.scan(/(?<=\:text\=>\{\:value=>\")[^\"]+/).uniq.sort
