import { useState } from 'react';
import * as forge from 'node-forge';

export default function Home() {
  const [certDetails, setCertDetails] = useState({
    commonName: '',
    email: ''
  });

  const generateCertificate = () => {
    // 证书生成逻辑
  };

  return (
    <div>
      <h1>S/MIME证书生成器</h1>
      {/* 表单和生成逻辑 */}
    </div>
  );
}
