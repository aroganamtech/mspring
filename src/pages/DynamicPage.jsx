import CVForm from "../components/CVForm";
import DetailPage from "../components/DetailPage";
import HubPage from "../components/HubPage";
import PageHeader from "../components/PageHeader";
import { findMenuItem, menu } from "../data/menu";
import { getPageContent } from "../data/pageContent";
import { Link, usePageTitle } from "../router";

export default function DynamicPage({ path }) {
  const content = getPageContent(path);
  const menuInfo = findMenuItem(path);
  usePageTitle(content?.title || "Page");

  if (!content) {
    return (
      <section className="section not-found">
        <div className="container">
          <PageHeader eyebrow="Not Found" title="Page not found" />
          <p>
            <Link to="/" className="btn btn--primary">
              Back to Home
            </Link>
          </p>
        </div>
      </section>
    );
  }

  if (content.type === "hub") {
    const menuEntry = menu.find((m) => m.path === path);
    return <HubPage content={content} path={path} children={menuEntry?.children || []} />;
  }

  if (content.type === "form") {
    return <CVForm content={content} parent={menuInfo?.parent} current={menuInfo?.label} />;
  }

  return <DetailPage content={content} parent={menuInfo?.parent} current={menuInfo?.label} />;
}
