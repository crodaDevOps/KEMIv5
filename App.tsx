import React, { useState, useEffect } from 'react';
import { Section } from './components/Section';
import { Badge } from './components/Badge';
import { TerminalBlock } from './components/TerminalBlock';
import { Splash } from './components/Splash';
import { OswegoParkLogo, OswegoLabsLogo } from './components/Logos';
import { 
  OswegoTreeIcon, OswegoFlaskIcon, OswegoLatticeIcon, OswegoLeafIcon, 
  OswegoSparkleIcon, OswegoShieldIcon, OswegoDashboardIcon, OswegoNodeClusterIcon,
  OswegoGearIcon, OswegoLightbulbIcon, OswegoDocumentIcon, OswegoGlobeArrowsIcon
} from './components/OswegoIcons';
import { 
  ShieldCheck, 
  Terminal,
  ArrowRight,
  Download,
  MapPin,
  Clock
} from 'lucide-react';

const FooterClock: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [coords, setCoords] = useState<string>(" --.--° -  --.--° -");

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const latDir = lat >= 0 ? 'N' : 'S';
          const lonDir = lon >= 0 ? 'E' : 'W';
          setCoords(`${Math.abs(lat).toFixed(4)}° ${latDir}  ${Math.abs(lon).toFixed(4)}° ${lonDir}`);
        },
        (error) => {
          console.debug("Geolocation access denied or failed", error);
          setCoords("NO SAT_LOCK");
        }
      );
    }
  }, []);

  if (!time) return null;

  return (
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
      <div className="flex items-center space-x-2">
        <Clock size={12} className="text-oswego-forest" />
        <span>{time.toLocaleTimeString('en-US', { hour12: false })}</span>
        <span className="text-zinc-700">|</span>
        <span>{Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
      </div>
      <div className="hidden md:block w-px h-3 bg-zinc-800"></div>
      <div className="flex items-center space-x-2">
        <MapPin size={12} className={coords.includes("SAT_LOCK") ? "text-red-900" : "text-oswego-cyan"} />
        <span>{coords}</span>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [splashDone, setSplashDone] = useState(false);

  const handleAssetDownload = (e: React.MouseEvent<HTMLDivElement>, name: string) => {
    e.preventDefault();
    const svgElement = e.currentTarget.querySelector('svg');
    
    if (svgElement) {
      const serializer = new XMLSerializer();
      let source = serializer.serializeToString(svgElement);
      
      // Add name space if missing
      if(!source.match(/^<svg[^>]+xmlns="http:\/\/www\.w3\.org\/2000\/svg"/)){
          source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
      }
      // Add preamble
      if(!source.match(/^<\?xml/)){
          source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
      }

      const blob = new Blob([source], {type: "image/svg+xml;charset=utf-8"});
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = `oswego-${name.toLowerCase()}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <>
      <Splash onComplete={() => setSplashDone(true)} />
      
      <main className={`min-h-screen bg-oswego-navy text-zinc-300 font-sans selection:bg-oswego-cyan selection:text-oswego-navy ${splashDone ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
        
        {/* Navigation / Top Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-oswego-navy/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between border-x border-zinc-800 h-16 px-6">
            <div className="flex items-center space-x-4">
              <a href="#" className="w-32 block hover:opacity-80 transition-opacity">
                <OswegoLabsLogo />
              </a>
            </div>
            <div className="hidden md:flex space-x-8 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <a href="#specs" className="hover:text-white transition-colors">Specifications</a>
              <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
              <a href="#assets" className="hover:text-white transition-colors text-oswego-cyan">Brand Assets</a>
            </div>
            <div className="flex items-center">
              <a href="#downloads" className="px-2 py-1 bg-oswego-navy border border-oswego-blueprint text-xs font-mono text-oswego-cyan hover:bg-oswego-blueprint/10 transition-colors">
                v5.15-draft
              </a>
            </div>
          </div>
        </nav>

        <div className="pt-16">
          
          {/* Hero Section */}
          <Section className="min-h-[70vh] flex flex-col justify-center border-t-0 bg-lattice-radial bg-no-repeat bg-center bg-cover" noBorderBottom>
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800 h-full">
              <div className="col-span-2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                <div className="mb-6">
                   <span className="text-oswego-cyan font-mono text-sm uppercase tracking-widest mb-2 block">OswegoLabs Presents</span>
                   <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
                    KEMIv5.15
                   </h1>
                   <h2 className="text-2xl md:text-4xl font-light text-zinc-400 mt-2">
                    Post-Quantum Encrypted Transport
                   </h2>
                </div>
                
                <p className="text-xl text-oswego-mist leading-relaxed max-w-2xl mb-12 font-light border-l-2 border-oswego-forest pl-6">
                  A protocol built for the next 30 years of secure communication. <br/>
                  Forward-secure. Quantum-safe. High-assurance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                   <a href="#downloads" className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-mono text-sm uppercase tracking-wider font-bold hover:bg-oswego-cyan transition-colors border border-white">
                    <Terminal className="w-4 h-4 mr-3" />
                    Read Specification
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-mono text-sm uppercase tracking-wider border border-zinc-700 hover:border-oswego-cyan transition-colors">
                    Contact Working Group
                  </a>
                </div>
              </div>
              
              <div className="col-span-1 bg-oswego-navy/50 p-8 md:p-12 flex flex-col justify-end border-b lg:border-b-0 border-zinc-800">
                <div className="font-mono text-sm space-y-4 text-zinc-500">
                   <div className="w-full h-48 mb-6 flex items-center justify-center border border-zinc-800 bg-zinc-900/50">
                      <OswegoLatticeIcon size={80} className="text-oswego-cyan opacity-80" />
                   </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span>Status</span>
                    <a href="#downloads" className="text-oswego-cyan hover:underline">IETF Draft-00</a>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span>License</span>
                    <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white">MIT / Apache 2.0</a>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span>Coverage</span>
                    <a href="https://csrc.nist.gov/pubs/fips/203/final" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white">NIST FIPS 203/204</a>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Crypto Suite Grid */}
          <Section title="Cryptographic Primitives" number="01">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <Badge label="ML-KEM-768" standard="NIST FIPS 203 (Kyber)" />
              <Badge label="ML-DSA-65" standard="NIST FIPS 204 (Dilithium)" />
              <Badge label="XChaCha20" standard="RFC 8439 (Poly1305)" />
              <Badge label="HKDF-SHA512" standard="RFC 5869 (KDF)" />
            </div>
          </Section>

          {/* Why Exists */}
          <Section title="Problem Statement" number="02">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <OswegoShieldIcon size={32} className="mr-4" />
                  Why KEMIv5 Exists
                </h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Modern infrastructures rely on message queues, event buses, and asynchronous transports where TLS simply does not apply.
                </p>
                <ul className="space-y-4 font-mono text-sm text-zinc-500">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">×</span>
                    Brokers must not decrypt or rewrite packets
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">×</span>
                    Messages must survive transport changes
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">×</span>
                    Intermediaries cannot terminate connections
                  </li>
                </ul>
              </div>
              <div className="p-8 md:p-12 bg-zinc-900/20">
                <h3 className="text-2xl font-bold text-white mb-6">Capabilities</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-mono text-oswego-cyan text-sm mb-2 uppercase tracking-wide flex items-center gap-2">
                      <OswegoFlaskIcon size={16} /> Forward Secrecy
                    </h4>
                    <p className="text-sm text-zinc-400">Fresh ML-KEM encapsulation on every message. Compromise of long-term keys does not reveal past traffic.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-oswego-cyan text-sm mb-2 uppercase tracking-wide flex items-center gap-2">
                      <OswegoNodeClusterIcon size={16} /> Per-Frame Isolation
                    </h4>
                    <p className="text-sm text-zinc-400">No shared session state. No renegotiation. No downgrade vectors. Just cryptographically-bound packets.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-oswego-cyan text-sm mb-2 uppercase tracking-wide flex items-center gap-2">
                      <OswegoGearIcon size={16} /> Enterprise Key Management
                    </h4>
                    <p className="text-sm text-zinc-400">Key IDs, registry rules, rotation intervals, and revocation policies built into the spec.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* How It Works */}
          <Section title="Message Flow" number="03">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="col-span-2 border-r border-zinc-800">
                <TerminalBlock />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="border-l-2 border-zinc-700 pl-4">
                    <h4 className="text-white font-bold mb-1">Encapsulation</h4>
                    <p className="text-sm text-zinc-500">Ephemeral key exchange per-packet ensures forward secrecy.</p>
                  </div>
                  <div className="border-l-2 border-zinc-700 pl-4">
                    <h4 className="text-white font-bold mb-1">Derivation</h4>
                    <p className="text-sm text-zinc-500">HKDF expands shared secrets into encryption and authentication keys.</p>
                  </div>
                  <div className="border-l-2 border-zinc-700 pl-4">
                    <h4 className="text-white font-bold mb-1">Authentication</h4>
                    <p className="text-sm text-zinc-500">Optional ML-DSA signatures bind metadata to the ciphertext.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Roadmap */}
          <Section title="Roadmap" number="04" id="roadmap">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
              {[
                { year: "2025", title: "Test Suite", desc: "Full ACVP-style conformance suite. 200+ vectors.", icon: OswegoDocumentIcon },
                { year: "2025", title: "Reference Impl", desc: "Python, Rust, Go, C versions using liboqs.", icon: OswegoGearIcon },
                { year: "Future", title: "Hardware Root", desc: "Key registries integrated with HSMs, TPMs, SGX.", icon: OswegoShieldIcon },
                { year: "Research", title: "KEMI v6", desc: "Multi-recipient KEM, Tree-based FS, Hybrid modes.", icon: OswegoFlaskIcon },
                { year: "Standard", title: "IETF Path", desc: "Security review, CFRG feedback, SECDISPATCH.", icon: OswegoGlobeArrowsIcon },
              ].map((item, idx) => (
                <div key={idx} className="p-8 hover:bg-zinc-900 transition-colors group cursor-default">
                   <div className="mb-4 text-zinc-600 group-hover:text-oswego-cyan transition-colors">
                      <item.icon size={28} />
                   </div>
                   <span className="block text-xs font-mono text-zinc-600 mb-2">{item.year}</span>
                   <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                   <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Icon/Brand Assets Grid */}
          <Section title="Oswego Design System" number="05" id="assets">
             <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-2xl font-bold text-white">Brand Assets</h3>
                   <span className="text-xs font-mono text-oswego-cyan border border-oswego-cyan/30 px-3 py-1 bg-oswego-cyan/10">OPEN SOURCE</span>
                </div>
                <p className="text-zinc-400 mb-8 max-w-3xl">
                  The visual language of high-assurance cryptography. Click any asset to download the SVG.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    { Icon: OswegoTreeIcon, name: "Tree" },
                    { Icon: OswegoFlaskIcon, name: "Flask" },
                    { Icon: OswegoLatticeIcon, name: "Lattice" },
                    { Icon: OswegoLeafIcon, name: "Leaf" },
                    { Icon: OswegoSparkleIcon, name: "Sparkle" },
                    { Icon: OswegoShieldIcon, name: "Shield" },
                    { Icon: OswegoDashboardIcon, name: "Dashboard" },
                    { Icon: OswegoNodeClusterIcon, name: "Cluster" },
                    { Icon: OswegoGearIcon, name: "Gear" },
                    { Icon: OswegoLightbulbIcon, name: "Lightbulb" },
                    { Icon: OswegoDocumentIcon, name: "Doc" },
                    { Icon: OswegoGlobeArrowsIcon, name: "Globe" },
                  ].map((asset, i) => (
                    <div 
                      key={i} 
                      onClick={(e) => handleAssetDownload(e, asset.name)}
                      className="relative flex flex-col items-center justify-center p-6 border border-zinc-800 bg-zinc-900/30 hover:border-oswego-cyan/50 hover:bg-oswego-cyan/5 transition-all cursor-pointer group"
                      title={`Download ${asset.name}.svg`}
                    >
                       <div className="absolute top-2 right-2 text-oswego-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                         <Download size={14} />
                       </div>
                       <asset.Icon size={32} className="mb-4 text-zinc-500 group-hover:text-oswego-cyan transition-colors" />
                       <span className="text-xs font-mono text-zinc-600 group-hover:text-white uppercase tracking-wider">{asset.name}</span>
                    </div>
                  ))}
                </div>
             </div>
          </Section>

          {/* Specifications Table */}
          <Section title="Specifications" number="06" id="specs">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-sm">
                <thead className="bg-zinc-900/50 text-xs uppercase text-zinc-500">
                  <tr>
                    <th className="px-6 py-4 border-b border-zinc-800 font-normal">Component</th>
                    <th className="px-6 py-4 border-b border-zinc-800 font-normal">Standard</th>
                    <th className="px-6 py-4 border-b border-zinc-800 font-normal">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 text-zinc-300">
                  <tr>
                    <td className="px-6 py-4">Key Establishment</td>
                    <td className="px-6 py-4 text-oswego-cyan">FIPS 203 (ML-KEM-768)</td>
                    <td className="px-6 py-4 text-zinc-500">NIST PQC KEM Standard</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Signatures</td>
                    <td className="px-6 py-4 text-oswego-cyan">FIPS 204 (ML-DSA-65)</td>
                    <td className="px-6 py-4 text-zinc-500">NIST PQC Signature Standard</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">AEAD</td>
                    <td className="px-6 py-4">RFC 8439 (XChaCha20)</td>
                    <td className="px-6 py-4 text-zinc-500">Nonce-extension for safety</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">KDF</td>
                    <td className="px-6 py-4">RFC 5869 (HKDF)</td>
                    <td className="px-6 py-4 text-zinc-500">Extract-expand function</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* Downloads / CTA */}
          <Section title="Resources" number="07" id="downloads">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 border-b md:border-b-0 border-r-0 md:border-r border-zinc-800">
                <h3 className="text-xl font-bold text-white mb-6">Try the Protocol</h3>
                <p className="text-zinc-400 mb-8 max-w-md">For engineers who want to evaluate post-quantum transport without standing up an entire TLS stack.</p>
                
                <ul className="space-y-4">
                  {[
                    "KEMIv5.15 Protocol Specification (IETF draft-00)",
                    "Test Vectors (ACVP-style JSON)",
                    "Python & Rust SDK Skeletons",
                    "Conformance Harness (pytest)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm font-mono text-zinc-300 group cursor-pointer hover:text-oswego-cyan">
                      <OswegoDocumentIcon size={16} className="mr-3 text-zinc-600 group-hover:text-oswego-cyan" />
                      <span className="border-b border-dashed border-zinc-700 pb-0.5 group-hover:border-oswego-cyan">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between" id="contact">
                <div>
                   <h3 className="text-xl font-bold text-white mb-6">Contact Working Group</h3>
                   <p className="text-zinc-400 mb-6">Technical inquiries, research collaboration, and implementation feedback.</p>
                   <div className="space-y-2 font-mono text-sm">
                     <p className="text-white hover:text-oswego-cyan cursor-pointer">security@kimi.example.com</p>
                     <p className="text-oswego-cyan hover:underline cursor-pointer">https://kimi.example.com/security</p>
                   </div>
                </div>
              </div>
            </div>
          </Section>
          
          {/* Footer - OswegoPark Parent Branding */}
          <footer className="w-full max-w-7xl mx-auto border-x border-b border-zinc-800 bg-oswego-navy py-16 px-8 flex flex-col items-center justify-center space-y-8">
              <a href="#" className="w-full max-w-xs opacity-80 hover:opacity-100 transition-opacity">
                 <OswegoParkLogo />
              </a>
              <div className="flex flex-col items-center text-center space-y-4">
                 <div className="flex space-x-6 text-zinc-500">
                    <OswegoTreeIcon size={24} className="hover:text-oswego-forest cursor-pointer" />
                    <OswegoLeafIcon size={24} className="hover:text-oswego-forest cursor-pointer" />
                    <ShieldCheck size={24} className="hover:text-white cursor-pointer" />
                 </div>
                 <div className="text-zinc-600 font-mono text-xs tracking-widest">
                    &copy; 2024 OswegoPark, LLC. Produced by OswegoLabs.
                 </div>
                 <FooterClock />
              </div>
          </footer>

        </div>
      </main>
    </>
  );
};

export default App;