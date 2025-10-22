import type { IconType } from "react-icons";
import { FaServer, FaCogs, FaExchangeAlt, FaRobot, FaLayerGroup, FaShieldAlt } from "react-icons/fa";

export type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

export const features: Feature[] = [
  { title: "Pluggable Multi-Backend Support", description: "Seamlessly works with Redis, Memcached, and future caching frameworks.", icon: FaServer },
  { title: "Unified Caching Interface", description: "Single API for set, get, delete, and clear operations across all backends.", icon: FaCogs },
  { title: "Runtime Backend Switching", description: "Switch caching technologies at runtime using simple configuration.", icon: FaExchangeAlt },
  { title: "ML-Based TTL Tuning", description: "Automatically adjusts cache expiry using machine learning for optimal freshness.", icon: FaRobot },
  { title: "Framework Complexity Abstraction", description: "Hides the low-level details of each caching framework for developer productivity.", icon: FaLayerGroup },
  { title: "Extensible & Robust Architecture", description: "Modular and thread-safe design, ready for future caching technologies.", icon: FaShieldAlt },
];
