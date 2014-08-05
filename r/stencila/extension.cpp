#include <stencila/component.hpp>
#include <stencila/stencil.hpp>

using namespace Stencila;

#include "extension.hpp"
#include "r-context.hpp"

/**
 * Start up function for the Stencila R module
 */
STENCILA_R_FUNC Stencila_startup(void){

	Component::define(Component::StencilCode, Component::Class(
		"Stencil",
		Stencil::page,
		Stencil::call
	));

	Component::define(Component::RContextCode, Component::Class(
		"RContext",
		RContext::page,
		RContext::call
	));

	return null;
}

/**
 * Shutdown function for the Stencila R module
 */
STENCILA_R_FUNC Stencila_shutdown(void){
	return null;
}

/**
 * Get the Stencila class name from the tag of an "externalpointer" in R
 *
 * This is used when converting an externalpointer returned from a call to a
 * C++ function into an R-side class
 * 
 * @param  self The object to obtain the tag for
 */
STENCILA_R_FUNC Stencila_class(SEXP self){
    STENCILA_R_BEGIN
        return R_ExternalPtrTag(self);
    STENCILA_R_END
}
