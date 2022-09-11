(function() {
  window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsUUFBQSxDQUFDLEtBQUQsQ0FBQTtBQUNsQyxRQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsUUFBQSxFQUFBLFdBQUEsRUFBQTtJQUFFLFdBQUEsR0FBYyxJQUFDLENBQUE7SUFDZixNQUFBLEdBQVMsUUFBUSxDQUFDLGdCQUFULENBQTBCLHdCQUExQjtJQUVULEtBQUEsd0NBQUE7O01BQ0UsS0FBQSxHQUFRLEtBQUssQ0FBQyxZQUFOLENBQW1CLFlBQW5CO01BQ1IsUUFBQSxHQUFXLENBQUMsQ0FBQyxXQUFBLEdBQWMsS0FBZjtNQUNaLFdBQUEsR0FBYyxpQkFBQSxHQUFvQixRQUFwQixHQUErQjtNQUM3QyxLQUFLLENBQUMsS0FBSyxDQUFDLG1CQUFELENBQVgsR0FBbUM7TUFDbkMsS0FBSyxDQUFDLEtBQUssQ0FBQyxnQkFBRCxDQUFYLEdBQWdDO01BQ2hDLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBRCxDQUFYLEdBQStCO01BQy9CLEtBQUssQ0FBQyxLQUFLLENBQUMsY0FBRCxDQUFYLEdBQThCO01BQzlCLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBWixHQUF3QjtJQVIxQjtFQUpnQyxDQUFsQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJ3Njcm9sbCcsIChldmVudCkgLT5cbiAgdG9wRGlzdGFuY2UgPSBAcGFnZVlPZmZzZXQgXG4gIGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10eXBlPSdwYXJhbGxheCddXCIpXG4gIFxuICBmb3IgbGF5ZXIgaW4gbGF5ZXJzXG4gICAgZGVwdGggPSBsYXllci5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVwdGgnKVxuICAgIG1vdmVtZW50ID0gLSh0b3BEaXN0YW5jZSAqIGRlcHRoKVxuICAgIHRyYW5zbGF0ZTNkID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBtb3ZlbWVudCArICdweCwgMCknXG4gICAgbGF5ZXIuc3R5bGVbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSB0cmFuc2xhdGUzZFxuICAgIGxheWVyLnN0eWxlWyctbW96LXRyYW5zZm9ybSddID0gdHJhbnNsYXRlM2RcbiAgICBsYXllci5zdHlsZVsnLW1zLXRyYW5zZm9ybSddID0gdHJhbnNsYXRlM2RcbiAgICBsYXllci5zdHlsZVsnLW8tdHJhbnNmb3JtJ10gPSB0cmFuc2xhdGUzZFxuICAgIGxheWVyLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0ZTNkXG4gIHJldHVybiJdfQ==
//# sourceURL=coffeescript