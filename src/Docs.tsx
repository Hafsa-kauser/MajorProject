
import React, { useState } from "react";
import { motion } from "framer-motion";

const copyToClipboard = async (text: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.top = "-1000px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  } catch (err) {}
};

const sectionAnim = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

const Docs: React.FC = () => {
  const [copiedId, setCopiedId] = useState("");

  const handleCopy = async (id: string, text: string) => {
    await copyToClipboard(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(""), 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12 flex gap-8">
        
        {/* Sidebar */}
        <aside className="hidden xl:block w-72 h-[80vh] sticky top-20 self-start">
          <div className="bg-white rounded-lg shadow p-5 overflow-y-auto h-full">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Documentation</h2>

            <nav className="text-sm text-gray-700 space-y-4">
              <div>
                <div className="font-semibold text-purple-600">Introduction</div>
                <ul className="ml-3 mt-2 space-y-1">
                  <li><a href="#overview" className="hover:text-purple-700">Overview</a></li>
                  <li><a href="#key-features" className="hover:text-purple-700">Key Features</a></li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-purple-600">Installation</div>
                <ul className="ml-3 mt-2 space-y-1">
                  <li><a href="#install" className="hover:text-purple-700">Install Cachetron</a></li>
                  <li><a href="#init" className="hover:text-purple-700">Initialize</a></li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-purple-600">Configuration</div>
                <ul className="ml-3 mt-2 space-y-1">
                  <li><a href="#auto-config" className="hover:text-purple-700">Auto-Generated Config</a></li>
                  <li><a href="#switch-backend" className="hover:text-purple-700">Switch Backend</a></li>
                  <li><a href="#manual-ttl" className="hover:text-purple-700">Manual TTL</a></li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-purple-600">Getting Started</div>
                <ul className="ml-3 mt-2 space-y-1">
                  <li><a href="#import-create" className="hover:text-purple-700">Import & Create Instance</a></li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-purple-600">Core Operations</div>
                <ul className="ml-3 mt-2 space-y-1">
                  <li><a href="#core-ops" className="hover:text-purple-700">Set / Get / Delete</a></li>
                  <li><a href="#core-ops" className="hover:text-purple-700">Clear / Keys / HasKey</a></li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-purple-600">Metrics & ML</div>
                <ul className="ml-3 mt-2 space-y-1">
                  <li><a href="#metrics" className="hover:text-purple-700">metrics.json</a></li>
                  <li><a href="#ml" className="hover:text-purple-700">How ML Uses It</a></li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-purple-600">Monitoring</div>
                <ul className="ml-3 mt-2 space-y-1">
                  <li><a href="#dashboard" className="hover:text-purple-700">Dashboard</a></li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-purple-600">CLI</div>
                <ul className="ml-3 mt-2 space-y-1">
                  <li><a href="#cli" className="hover:text-purple-700">CLI Commands</a></li>
                </ul>
              </div>

            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <motion.header initial="hidden" animate="show" className="mb-8">
            <motion.h1 variants={sectionAnim} className="text-3xl md:text-4xl font-extrabold text-purple-800">
              Cachetron — Documentation
            </motion.h1>

            <motion.p variants={sectionAnim} className="mt-3 text-gray-600 max-w-3xl">
              A pluggable caching abstraction layer with ML-powered TTL prediction.
            </motion.p>
          </motion.header>

          <article className="space-y-12">

            {/* Introduction */}
            <motion.section id="overview" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-purple-700 mb-3">Introduction — Overview</h2>

              <p className="text-gray-700 leading-relaxed">
                Modern applications depend heavily on caching to deliver fast, scalable, and efficient performance. However, integrating directly with a specific caching technology—such as Redis or Memcached—often results in tight coupling, making it difficult to switch providers or extend the system over time. Developers also face the challenge of manually setting TTL (Time-To-Live) values, which can lead to poor cache utilization, wasted memory, and inconsistent performance across the application.
This tool addresses these challenges by introducing a pluggable caching abstraction layer combined with intelligent, machine-learning-based TTL prediction. It provides a unified and flexible approach to caching that adapts to application behavior, reduces manual effort, and improves overall system efficiency.

              </p>
            </motion.section>

            <motion.section id="key-features" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Key Features</h3>

              <ol className="list-decimal ml-6 text-gray-700 space-y-1">
                <li>Pluggable Caching Abstraction Layer</li>
                <li>Decoupled Cache Architecture</li>
                <li>ML-Powered TTL Prediction</li>
                <li>Reduced Manual Configuration</li>
                <li>Optimized Performance & Scalability</li>
                <li>Easy Integration</li>
              </ol>
            </motion.section>

            {/* Installation */}
            <motion.section id="install" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-purple-700 mb-3">Installation</h2>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Install Cachetron</h4>

                  <div className="bg-gray-900 text-white p-4 rounded-md relative mt-2">
                    <pre id="cli-install" className="whitespace-pre-wrap">npm install -g cachetron</pre>
                    <button
                      onClick={() => handleCopy("cli-install", document.getElementById("cli-install")?.innerText ?? "")}
                      className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                    >
                      {copiedId === "cli-install" ? "Copied" : "Copy"}
                    </button>
                  </div>
<p className="text-sm text-gray-500 mt-2"> The <code>-g</code> flag installs Cachetron globally so you can run its commands from anywhere. You may also install locally with <code>npm install cachetron</code>. </p>

                  
                </div>

                <div id="init" className="mt-4">
                  <h4 className="font-semibold text-gray-800">Initialize Cachetron</h4>

                  <div className="bg-gray-900 text-white p-4 rounded-md relative mt-2">
                    <pre id="cli-init" className="whitespace-pre-wrap">cachetron init</pre>
                    <button
                      onClick={() => handleCopy("cli-init", document.getElementById("cli-init")?.innerText ?? "")}
                      className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                    >
                      {copiedId === "cli-init" ? "Copied" : "Copy"}
                    </button>
                  </div>
<p className="text-sm text-gray-500 mt-2"> Runs the CLI initializer which creates a <code>cachetron.json</code> configuration file for your project. </p>

                  
                </div>
              </div>
            </motion.section>

            {/* Auto-generated config */}
            <motion.section id="auto-config" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-purple-700 mb-3">Auto-Generated Configuration File</h2>
              <p className="text-gray-700 mb-3"> After running <code>cachetron init</code>, Cachetron creates a default <code>cachetron.json</code>. Example for Memcached: </p>


              <div className="bg-gray-900 text-white p-4 rounded-md relative">
                <pre id="memcached-config" className="whitespace-pre-wrap">
{`{
  "type": "memcache",
  "url": "localhost:11211",
  "autoTTL": true
}`}
                </pre>

                <button
                  onClick={() => handleCopy("memcached-config", document.getElementById("memcached-config")?.innerText ?? "")}
                  className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                >
                  {copiedId === "memcached-config" ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="mt-4 text-gray-700"> <p className="mb-2"><strong>Switching backend:</strong> change the <code>type</code> field to  <code>"redis"</code>, or <code>"memcache"</code>.</p> <p className="mb-2"><strong>Manual TTL:</strong> set <code>"autoTTL": false</code> if you prefer to manage TTLs yourself.</p> </div>

            </motion.section>

            {/* Switch backend */}
            <motion.section id="switch-backend" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Switching Cache Backend</h3>
<p className="text-gray-700"> To switch backends, update <code>cachetron.json</code>: </p>

              <div className="bg-gray-900 text-white p-4 rounded-md relative mt-3">
                <pre id="backend-types" className="whitespace-pre-wrap">
{`{
  "type": "redis",
  "url": "localhost:6379",
  "autoTTL": true
}`}
                </pre>

                <button
                  onClick={() => handleCopy("backend-types", document.getElementById("backend-types")?.innerText ?? "")}
                  className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                >
                  {copiedId === "backend-types" ? "Copied" : "Copy"}
                </button>
              </div>
            </motion.section>

            {/* Manual TTL */}
            <motion.section id="manual-ttl" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Manual TTL (Disable AutoTTL)</h3>
<p className="text-gray-700 mb-3">If you prefer manual TTL control, set <code>autoTTL</code> to <code>false</code>:</p>
              <div className="bg-gray-900 text-white p-4 rounded-md relative">
                <pre id="manual-ttl-block" className="whitespace-pre-wrap">
{`{
  "type": "memcache",
  "url": "localhost:11211",
  "autoTTL": false
}`}
                </pre>

                <button
                  onClick={() => handleCopy("manual-ttl-block", document.getElementById("manual-ttl-block")?.innerText ?? "")}
                  className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                >
                  {copiedId === "manual-ttl-block" ? "Copied" : "Copy"}
                </button>
              </div>
              <p className="text-gray-700 mt-4"> When <code>autoTTL</code> is disabled, set TTL in code: <code>cache.set("user1", data, 120)</code>. </p>

            </motion.section>

            {/* Getting Started */}
            <motion.section id="import-create" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-purple-700 mb-3">Getting Started</h2>
<p className="text-gray-700 mb-3">Import Cachetron and create a proxy-backed instance (example):</p>
              <div className="bg-gray-900 text-white p-4 rounded-md relative">
                <pre id="import-create-code" className="whitespace-pre-wrap">
{`import { cachetron, updateCacheConfig } from "cachetron";

export const cache = new Proxy(
  {},
  {
    get(_, prop) {
      const instance = cachetron(); 
      return instance[prop].bind(instance);
    },
  }
);`}
                </pre>

                <button
                  onClick={() => handleCopy("import-create-code", document.getElementById("import-create-code")?.innerText ?? "")}
                  className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                >
                  {copiedId === "import-create-code" ? "Copied" : "Copy"}
                </button>
              </div>
            </motion.section>

            {/* Core operations */}
            <motion.section id="core-ops" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-purple-700 mb-3">Core Operations</h2>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Set */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Set</h3>

                  <div className="bg-gray-900 text-white p-4 rounded-md relative">
                    <pre id="op-set" className="whitespace-pre-wrap">await cache.set("key", value, ttl);</pre>

                    <button
                      onClick={() => handleCopy("op-set", document.getElementById("op-set")?.innerText ?? "")}
                      className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                    >
                      {copiedId === "op-set" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Get */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Get</h3>

                  <div className="bg-gray-900 text-white p-4 rounded-md relative">
                    <pre id="op-get" className="whitespace-pre-wrap">const data = await cache.get("key");</pre>

                    <button
                      onClick={() => handleCopy("op-get", document.getElementById("op-get")?.innerText ?? "")}
                      className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                    >
                      {copiedId === "op-get" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Delete */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Delete</h3>

                  <div className="bg-gray-900 text-white p-4 rounded-md relative">
                    <pre id="op-delete" className="whitespace-pre-wrap">await cache.delete("key");</pre>

                    <button
                      onClick={() => handleCopy("op-delete", document.getElementById("op-delete")?.innerText ?? "")}
                      className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                    >
                      {copiedId === "op-delete" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Clear / Keys / HasKey */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Clear / Keys / HasKey</h3>

                  <div className="bg-gray-900 text-white p-4 rounded-md relative space-y-2">

                    <pre id="op-clear" className="whitespace-pre-wrap">await cache.clear();</pre>
                    <pre id="op-keys" className="whitespace-pre-wrap">const allKeys = await cache.keys();</pre>
                    <pre id="op-haskey" className="whitespace-pre-wrap">const exists = await cache.hasKey("key");</pre>

                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                      <button
                        onClick={() => handleCopy("op-clear", document.getElementById("op-clear")?.innerText ?? "")}
                        className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                      >
                        {copiedId === "op-clear" ? "Copied" : "Copy Clear"}
                      </button>

                      <button
                        onClick={() => handleCopy("op-keys", document.getElementById("op-keys")?.innerText ?? "")}
                        className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                      >
                        {copiedId === "op-keys" ? "Copied" : "Copy Keys"}
                      </button>

                      <button
                        onClick={() => handleCopy("op-haskey", document.getElementById("op-haskey")?.innerText ?? "")}
                        className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                      >
                        {copiedId === "op-haskey" ? "Copied" : "Copy HasKey"}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </motion.section>

            {/* Metrics */}
            <motion.section id="metrics" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-purple-700 mb-3">After running node index.js</h2>

              <p className="text-gray-700 mb-3">
                Cachetron automatically creates a <code>metrics.json</code> file when your server runs. This file is used internally and you do not need to edit it.

              </p>
              <div className="bg-gray-100 border border-gray-200 p-4 rounded"> <p className="font-semibold text-gray-800 mb-2">What it contains</p> <ul className="list-disc ml-6 text-gray-700 space-y-1"> <li>time — timestamp of metric</li> <li>hitRatio / missRatio — current interval</li> <li>hitRatioLifetime / missRatioLifetime — lifetime values</li> <li>cacheSize — memory used</li> <li>dataChangeRate — how often data changes</li> <li>keyCount — number of cached keys</li> <li>avgKeySize — average entry size</li> </ul> </div>

            </motion.section>

            {/* ML */}
            <motion.section id="ml" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">How ML Uses metrics.json</h3>

              <p className="text-gray-700">
               If <code>"autoTTL": true</code>, Cachetron's ML model reads <code>metrics.json</code> to learn usage patterns (access frequency, data-change rate, hit/miss ratios, memory usage) and predicts an optimal TTL for each key. This happens automatically — you don't need to set TTL manually.

              </p>
            </motion.section>

            {/* Dashboard */}
            <motion.section id="dashboard" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-purple-700 mb-3">Monitoring — Dashboard</h2>

              <div className="bg-gray-900 text-white p-4 rounded-md relative">
                <pre id="cli-dashboard" className="whitespace-pre-wrap">cachetron dashboard</pre>

                <button
                  onClick={() => handleCopy("cli-dashboard", document.getElementById("cli-dashboard")?.innerText ?? "")}
                  className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                >
                  {copiedId === "cli-dashboard" ? "Copied" : "Copy"}
                </button>
              </div>
            </motion.section>

            {/* CLI */}
            <motion.section id="cli" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-purple-700 mb-3">CLI Commands</h2>

              <div className="space-y-4">

                <div className="bg-gray-900 text-white p-4 rounded-md relative">
                  <pre id="cli-install-2" className="whitespace-pre-wrap">npm install cachetron</pre>

                  <button
                    onClick={() => handleCopy("cli-install-2", document.getElementById("cli-install-2")?.innerText ?? "")}
                    className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                  >
                    {copiedId === "cli-install-2" ? "Copied" : "Copy"}
                  </button>
                </div>

                <div className="bg-gray-900 text-white p-4 rounded-md relative">
                  <pre id="cli-init-2" className="whitespace-pre-wrap">cachetron init</pre>

                  <button
                    onClick={() => handleCopy("cli-init-2", document.getElementById("cli-init-2")?.innerText ?? "")}
                    className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                  >
                    {copiedId === "cli-init-2" ? "Copied" : "Copy"}
                  </button>
                </div>

                <div className="bg-gray-900 text-white p-4 rounded-md relative">
                  <pre id="cli-dashboard-2" className="whitespace-pre-wrap">cachetron dashboard</pre>

                  <button
                    onClick={() => handleCopy("cli-dashboard-2", document.getElementById("cli-dashboard-2")?.innerText ?? "")}
                    className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded"
                  >
                    {copiedId === "cli-dashboard-2" ? "Copied" : "Copy"}
                  </button>
                </div>

              </div>
            </motion.section>

          </article>
        </main>

      </div>
    </div>
  );
};

export default Docs;
