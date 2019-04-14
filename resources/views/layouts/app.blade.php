<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body @php body_class() @endphp>
    @php do_action('get_header') @endphp
    <!-- @include('partials.header') -->
    <div class="wrap container" role="document">
      <main class="main">
        <section class="content">
          <div class="container">
            <article class="content__container">
              <h2 class="content__title">Salutations !</h2>
              <div class="content__entry">
                <p>I’m Morgan, <span class="bold">Creative developer</span> from France. I love making beautiful websites with clean interactions and animations.</p>
              </div>
              <div class="content__entry">
                <p>Studied at <span class="bold">ICAN Design School</span>, Paris.</p>
                <p>Currently working as <span class="bold">Freelance</span> \o/, formely at <span class="bold">Be API</span> and <span class="bold">Click & Cheers</span>.</p>
              </div>
            </article>
            <!-- @yield('content') -->
          </div>
          @if (App\display_sidebar())
            <aside class="sidebar">
              @include('partials.sidebar')
            </aside>
          @endif
        </section>
      </main>
    </div>
    @php do_action('get_footer') @endphp
    @include('partials.footer')
    @php wp_footer() @endphp
  </body>
</html>
