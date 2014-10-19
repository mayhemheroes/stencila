#include <stencila/stencil.hpp>
#include <stencila/string.hpp>

namespace Stencila {

std::string Stencil::title(void) const {
    return select("#title").text();
}

std::string Stencil::description(void) const {
    return select("#description").text();
}

std::vector<std::string> Stencil::keywords(void) const {
    std::vector<std::string> keywords;
    if(Node elem = select("#keywords")){
        auto text = elem.text();
        keywords = split(text,",");
        for(auto& keyword : keywords) trim(keyword);
    }
    return keywords;
}

std::vector<std::string> Stencil::authors(void) const {
    std::vector<std::string> authors;
    for(auto& author : filter(".author")){
        authors.push_back(author.text());
    }
    return authors;
}

std::vector<std::string> Stencil::contexts(void) const {
    std::vector<std::string> contexts;
    if(Node elem = select("#contexts")){
        auto text = elem.text();
        contexts = split(text,",");
        for(auto& context : contexts) trim(context);
    }    
    return contexts;
}

std::string Stencil::theme(void) const {
    if(Node theme = select("#theme")) return theme.text();
    else return "core/stencils/themes/default";
}

}
