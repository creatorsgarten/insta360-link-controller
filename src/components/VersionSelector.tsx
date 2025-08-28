import { useStore } from "@nanostores/react";
import { $protocolVersion, type ProtocolVersion } from "../state/protocol";

export function VersionSelector() {
  const protocolVersion = useStore($protocolVersion);

  const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newVersion = event.target.value as ProtocolVersion;
    $protocolVersion.set(newVersion);
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <label htmlFor="protocol-version" className="text-green-400 font-bold">
        Protocol Version:
      </label>
      <select
        id="protocol-version"
        value={protocolVersion}
        onChange={handleVersionChange}
        className="bg-black border border-green-400 text-white px-2 py-1 rounded"
      >
        <option value="v2">v2.0 (Latest)</option>
        <option value="v1">v1.4.1 (Legacy)</option>
      </select>
      <span className="text-gray-400 text-sm">
        {protocolVersion === "v2" ? "Using latest protocol" : "Using legacy protocol"}
      </span>
    </div>
  );
}
