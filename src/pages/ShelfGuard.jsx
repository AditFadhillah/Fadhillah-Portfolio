import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";

// To swap a placeholder for a real image, replace it with:
// <img src="/Fadhillah-Portfolio/images/shelfguard/<file>.png" alt="<description>" />
const ScreenshotPlaceholder = ({ label }) => {
  return (
    <div className="w-full rounded-xl border-2 border-dashed border-primary/40 bg-card p-10 text-center">
      <p className="text-lg font-semibold">Screenshot Placeholder</p>
      <p className="text-muted-foreground mt-2">{label}</p>
      <p className="text-sm text-muted-foreground mt-1">
        Add your image later in this section.
      </p>
    </div>
  );
};

export const ShelfGuardProject = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-12">
      <ThemeToggle />
      <div className="container max-w-4xl mx-auto space-y-12 text-left">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <section className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">
            Personal Project
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            ShelfGuard
          </h1>
          <p className="text-xl text-muted-foreground">
            A Mini Warehouse and Team Access Dashboard Built to Learn Angular
          </p>
          <p className="text-primary">
            Angular, TypeScript, Angular Material, Signals, RxJS, Vitest
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://github.com/AditFadhillah/ShelfGuard"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button"
            >
              Source Code
            </a>
          </div>
        </section>

        <section className="space-y-4">
          <ScreenshotPlaceholder label="Hero screenshot: the inventory dashboard with the toolbar and role switcher" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            ShelfGuard is a single-workspace inventory and team-access dashboard. It
            tracks stock levels for a small warehouse, flags items that are low or out
            of stock, records deliveries, and limits what each user role can do. All
            data is held in memory, with no database and no login, so the project stays
            focused on the front end.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Motivation</h2>
          <p className="text-muted-foreground leading-relaxed">
            I am comfortable with TypeScript and React, and I built ShelfGuard to learn
            how Angular does the same jobs. I set rules to avoid React habits: shared
            state lives in injectable services instead of being passed down as props,
            business logic stays out of lifecycle hooks, and every component is
            standalone. I also leaned on Angular Material instead of writing custom CSS.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Features</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Role Switching and Access Control</h3>
            <p className="text-muted-foreground">
              A toolbar selector switches between Admin and Viewer, and the whole app
              updates at once without a reload. Delete buttons appear only for Admins,
              and a functional route guard sends Viewers away from the settings page
              with a warning message.
            </p>
            <ScreenshotPlaceholder label="Admin view with delete buttons next to the Viewer view without them" />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Inventory Dashboard</h3>
            <p className="text-muted-foreground">
              A table of 18 items with search by name or SKU, a stock status filter,
              and colored status chips. Typing waits for a short pause before searching,
              and a fast run of keystrokes never shows results from an older query.
              Deleting an item asks for confirmation first.
            </p>
            <ScreenshotPlaceholder label="Inventory table with search text entered and a status filter applied" />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Add Item Form</h3>
            <p className="text-muted-foreground">
              A reactive form with a pattern-checked SKU, an asynchronous check that
              reports when a SKU already exists, and a dynamic list of suppliers where at
              least one is required. Submit stays disabled while the form is invalid,
              the SKU check is running, or a save is in progress.
            </p>
            <ScreenshotPlaceholder label="Add item form showing the 'SKU already exists' error and two suppliers" />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Receive Delivery</h3>
            <p className="text-muted-foreground">
              Each row links to a page for recording a delivery of an item that already
              exists. The form previews the new stock level as the quantity is typed,
              then adds the quantity to the item's stock.
            </p>
            <ScreenshotPlaceholder label="Receive delivery page with the new stock level preview" />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Team and Access Settings</h3>
            <p className="text-muted-foreground">
              A lazy-loaded page that lists the team and their roles. It is available to
              Admins only.
            </p>
            <ScreenshotPlaceholder label="Settings page with the team table" />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Technical Architecture</h2>
          <p className="text-muted-foreground">
            The app is built from standalone Angular components with strict TypeScript.
            Synchronous UI state, such as the current role, uses signals and computed
            values. Asynchronous work uses RxJS and is converted with toSignal so the
            templates can read it directly. The services call HttpClient against /api
            routes, and two functional interceptors take it from there: one adds an
            X-User-Role header and logs each request, and the other answers from an
            in-memory mock backend after a short delay. Because of this, swapping in a
            real server later would not require changing the services.
          </p>
          <ScreenshotPlaceholder label="Architecture diagram: components, services, interceptors, mock backend" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Engineering Challenges</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Making the search pipeline drop stale responses, using debounce, distinct values, and switchMap.</li>
            <li>Keeping form state in sync with the screen when change detection no longer runs on every event, by bridging form status into signals.</li>
            <li>Running an asynchronous SKU check without sending a request on every keystroke.</li>
            <li>Faking a backend inside an interceptor, including error responses and a role check, so the services behave like they talk to a real API.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Testing</h2>
          <p className="text-muted-foreground">
            Unit tests run with Vitest and cover the stock status rule, the services
            and mock backend, the interceptors, the SKU validator, the role guard, role
            switching, and the main components. Together there are 45 tests.
          </p>
          <ScreenshotPlaceholder label="Terminal output showing the passing test run" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Status and Next Steps</h2>
          <p className="text-muted-foreground">
            ShelfGuard works end to end with mock data, and every planned feature is
            built and tested. Next I want to add editing of existing items, persist data
            between sessions, and connect it to a real backend.
          </p>
        </section>
      </div>
    </div>
  );
};
