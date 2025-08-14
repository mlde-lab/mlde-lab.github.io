module Jekyll
  module EmailObfuscate
    def obfuscate(input)
      input.chars.map { |c| "&##{c.ord};" }.join
    end
  end
end

Liquid::Template.register_filter(Jekyll::EmailObfuscate)

