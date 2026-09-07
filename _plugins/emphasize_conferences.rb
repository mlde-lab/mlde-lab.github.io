require 'cgi'

module Jekyll
  module ConferenceEmphasis
    def emphasize_conferences(input)
      CGI.escapeHTML(input.to_s).gsub(/\b(?:ECML[ -]PKDD|SIGSPATIAL|AISTATS|ICML|ICLR|KDD|SDM|VLDB|SIGIR|ICDE|WACV|ICDM|MNRAS|ACML)\b/) do |acronym|
        "<strong>#{acronym}</strong>"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::ConferenceEmphasis)
