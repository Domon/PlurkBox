/* 
 * This file is part of PlurkBox.
 *
 * PlurkBox is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * PlurkBox is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with PlurkBox.  If not, see <http://www.gnu.org/licenses/>.
 */

(function($){

  //console.log('PlurkBox loaded.');

  var unbind_event_listeners = function(links, rel) {
    links.each(function(i, link) {
      //console.log('processing ' + link);
      $(link).replaceWith($(link).clone(false).attr('rel', rel));
    });

    $('a[rel="' + rel + '"]').colorbox({transition: 'none', speed: 0});
  };

  var links = $('div.bigplurk').find('a.ex_link.pictureservices');
  unbind_event_listeners(links, 'bigplurk');

  var responses = $('li');
  responses.each(function(i, response) {
    var response_id = $(response).attr('id');
    var links = $(response).find('a.ex_link.pictureservices');

    unbind_event_listeners(links, response_id);
  });

})(jQuery);
