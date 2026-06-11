const data = {
  hierarchies: [
    { id: "v16", name: "Maestro V16", status: "Editable", products: 14 },
    { id: "fitflow", name: "FitFlow", status: "Editable", products: 14 },
    { id: "empty-2026", name: "Jerarquia comercial nueva", status: "Vacia", products: 0 }
  ],
  productLists: [
    { id: "base", name: "Productos base maestro", products: 14 },
    { id: "proveedor", name: "Lista proveedor / atributos", products: 0 },
    { id: "nuevos", name: "Nuevos productos por asociar", products: 0 }
  ],
  assistantDecisions: [],
  hierarchyListLinks: [],
  nodes: [
    { id: "l-hid", parent: null, level: 0, name: "01 Instalaciones Hidraulicas" },
    { id: "s-pvc", parent: "l-hid", level: 1, name: "PVC Presion" },
    { id: "c-tubpvc", parent: "s-pvc", level: 2, name: "Tuberia PVC" },
    { id: "f-c6", parent: "c-tubpvc", level: 3, name: "Tuberia PVC C-6" },
    { id: "f-codos", parent: "s-pvc", level: 2, name: "Fittings PVC" },
    { id: "fam-codos", parent: "f-codos", level: 3, name: "Codos PVC Presion" },
    { id: "fam-tees", parent: "f-codos", level: 3, name: "Tees PVC Presion" },
    { id: "fam-collares", parent: "s-pvc", level: 2, name: "Conexiones de Red" },
    { id: "fam-collares-arr", parent: "fam-collares", level: 3, name: "Collares de Arranque" },

    { id: "l-riego", parent: null, level: 0, name: "03 Sistemas de Riego" },
    { id: "s-mang", parent: "l-riego", level: 1, name: "Mangueras y Conducciones" },
    { id: "c-acoples", parent: "s-mang", level: 2, name: "Acoples y Terminales" },
    { id: "f-camlock", parent: "c-acoples", level: 3, name: "Acoples Camlock" },
    { id: "f-layflat", parent: "c-acoples", level: 3, name: "Terminales y Coplas Layflat" },
    { id: "s-tec", parent: "l-riego", level: 1, name: "Riego Tecnificado" },
    { id: "c-emisores", parent: "s-tec", level: 2, name: "Emisores de Riego" },
    { id: "f-linea", parent: "c-emisores", level: 3, name: "Cintas y Lineas de Riego" },

    { id: "l-bomb", parent: null, level: 0, name: "04 Equipos de Bombeo" },
    { id: "s-centr", parent: "l-bomb", level: 1, name: "Centrifugas y Perifericas" },
    { id: "c-bombdom", parent: "s-centr", level: 2, name: "Bombas Domiciliarias" },
    { id: "f-centr", parent: "c-bombdom", level: 3, name: "Bombas Centrifugas" },
    { id: "s-sum", parent: "l-bomb", level: 1, name: "Sumergibles y Pozo Profundo" },
    { id: "c-achique", parent: "s-sum", level: 2, name: "Achique y Drenaje" },
    { id: "f-sum", parent: "c-achique", level: 3, name: "Bombas Sumergibles Achique" },

    { id: "l-elec", parent: null, level: 0, name: "07 Electrico e Instrumental" },
    { id: "s-conduit", parent: "l-elec", level: 1, name: "Conduit" },
    { id: "c-tubcon", parent: "s-conduit", level: 2, name: "Tuberia Conduit" },
    { id: "f-tubcon", parent: "c-tubcon", level: 3, name: "Tuberias Conduit" }
  ],
  products: [
    { id: "00264", name: "TUB. PVC HID. 315MM C-6 C/GOMA X MT.", originalNode: "fam-codos", node: "fam-codos", status: "suggested", suggestion: "f-c6", price: 78500 },
    { id: "02931", name: "CRUCES 25 mm. PVC CEMENTAR", originalNode: "fam-tees", node: "fam-tees", status: "validated", price: 1563 },
    { id: "05114", name: "COLLAR ARRANQUE PVC PARA PVC 250 X 4", originalNode: "fam-collares-arr", node: "fam-collares-arr", status: "validated", price: 0 },
    { id: "05261", name: "COLLAR PVC PARA P.V.C 140 X 3", originalNode: "fam-collares-arr", node: "fam-collares-arr", status: "corrected", price: 0 },
    { id: "02734", name: "CURVA 125mm x 45 CEMENTAR", originalNode: "fam-codos", node: "fam-codos", status: "suggested", suggestion: "fam-codos", price: 0 },
    { id: "02483", name: "TEE REGISTRO 110mm C/GOMA BLANCO", originalNode: "fam-tees", node: "fam-tees", status: "pending", price: 0 },
    { id: "03460", name: "ACOPLE RAPIDO CAMLOCK MANGUERA C 2 ALU", originalNode: "f-camlock", node: "f-camlock", status: "validated", price: 0 },
    { id: "01794", name: "COPLA LAYFLAT 2 ECO", originalNode: "f-layflat", node: "f-layflat", status: "pending", price: 0 },
    { id: "09970", name: "LINEA RIEGO CEODRIP PC 2 LTR HR 16MM", originalNode: "f-linea", node: "f-linea", status: "validated", price: 0 },
    { id: "22700", name: "BOMBA CENTRIFUGA 1HP", originalNode: "f-centr", node: "f-centr", status: "pending", price: 0 },
    { id: "80747", name: "BOMBA BTCM150B2 2HP 220V BESTFLOW", originalNode: "f-centr", node: "f-centr", status: "validated", price: 0 },
    { id: "203242", name: "BOMBA ACHIQUE CON TRITURADOR 1.5 HP 220V", originalNode: "f-sum", node: "f-sum", status: "corrected", price: 0 },
    { id: "00274", name: "TUB. CONDUIT 50 MM X 6 MT X METRO", originalNode: "f-tubcon", node: "f-tubcon", status: "validated", price: 0 },
    { id: "50750", name: "HALOFFLEX 20X50MT 750N REFORZADO ELECTRI", originalNode: "f-tubcon", node: "f-tubcon", status: "suggested", suggestion: "f-tubcon", price: 0 }
  ]
};

const state = {
  selectedNode: null,
  selectedProduct: null,
  selectedProducts: new Set(),
  expandedNodes: new Set(["l-hid", "s-pvc", "f-codos", "fam-collares", "l-riego", "s-mang"]),
  activeHierarchyId: "v16",
  activeProductListId: "base",
  activeView: "catalog",
  view: "active",
  treeSearch: "",
  productSearch: "",
  listSearch: "",
  status: "all",
  productSort: { key: "cod", dir: "asc" },
  listSort: { key: "cod", dir: "asc" },
  productFilters: {},
  listFilters: {},
  productRenderLimit: 400,
  listRenderLimit: 400,
  hideRedundant: false,
  changes: [],
  activePane: "source",
  operation: {
    type: null,
    sourceNode: null,
    targetNode: null,
    targetSearch: "",
    targetExpandedNodes: new Set(),
    mergeName: "",
    mergeLocation: "source"
  }
};

let selectedLoadType = "hierarchy";
let pendingHierarchyLoad = null;
let pendingProductLoad = null;
let renderCache = null;
let saveTimer = null;
let firebaseSaveTimer = null;
let dataDirty = false;
let firebaseDirty = false;
let importInProgress = false;
let activeLoadStartedAt = 0;
let firebaseReady = false;
let firebaseUser = window.catalogAdminFirebaseUser || null;
const loadDebug = [];

const moveState = {
  targetNode: null,
  expandedNodes: new Set(),
  mode: "product",
  sourceNode: null,
  allowedTarget: null
};

const historyStack = [];
const redoStack = [];
const classificationAssistant = {
  selectionType: "products",
  productIds: [],
  sourceNodeId: null,
  grouped: false,
  forceTogether: false,
  allowWholeNodeMove: false,
  analyses: [],
  activeAnalysisIndex: 0,
  activeCandidateIndex: 0,
  externalInsight: null
};

const UNCLASSIFIED_NODE_ID = "__unclassified__";
const levelNames = ["Linea", "Sistema", "Categoria", "Familia"];
const loadTypes = {
  hierarchy: {
    title: "Jerarquia",
    detail: "Carga una estructura sola o una estructura con productos asignados."
  },
  products: {
    title: "Productos",
    detail: "Carga una lista simple o una lista con atributos, sin clasificar en jerarquias."
  }
};
const statusLabels = {
  pending: "Pendiente",
  validated: "Validado",
  corrected: "Corregido",
  suggested: "Sugerido"
};

const $ = (id) => document.getElementById(id);
function debounce(fn, delay = 120) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const APP_BUILD = "assistant-final-node-dev-20260611-01";
const TABLE_RENDER_BATCH = 400;
const STORAGE_KEY = "catalogAdmin.localState.v1";
const DB_NAME = "catalogAdminDb";
const DB_STORE = "catalogState";
const ADMIN_ENV = "dev";
const ADMIN_STATE_CHUNKS = "catalog_admin_state_chunks_dev";
const ADMIN_VERSIONS = "catalog_admin_versions_dev";
const ADMIN_AUDIT = "catalog_admin_audit_dev";
const ADMIN_META_COLLECTION = "config_dev";
const ADMIN_META_DOC = "catalog_admin_meta";
const ADMIN_USERS_COLLECTION = "catalog_admin_users_dev";
const ADMIN_CHUNK_SIZE = 700000;
const OWNER_EMAIL_DEV = "cristiancondell@gmail.com";
const LOCAL_TEST_MODE = ["file:", "http:"].includes(window.location.protocol) && (window.location.protocol === "file:" || ["localhost", "127.0.0.1", ""].includes(window.location.hostname));
const adminRoleLabels = {
  owner: "Owner",
  admin: "Administrador"
};
const adminRoleRank = { none: 0, admin: 1, owner: 2 };
let adminUsers = [];
let currentAdminRole = LOCAL_TEST_MODE ? "owner" : "none";

function normalizeAdminRole(role) {
  const text = cellText(role).toLowerCase();
  if (["owner", "dueno", "dueño", "propietario"].includes(text)) return "owner";
  return "admin";
}

function isDevOwnerEmail(email) {
  return adminUserId(email) === OWNER_EMAIL_DEV;
}

function applySavedCatalogState(saved) {
  if (!saved?.data) return false;
  ["hierarchies", "productLists", "assistantDecisions", "hierarchyListLinks", "nodes", "products"].forEach((key) => {
    if (key === "products" && saved.productDataInIndexedDb && (!saved.data[key] || saved.data[key].length === 0)) return;
    if (Array.isArray(saved.data[key]) && Array.isArray(data[key])) {
      data[key].splice(0, data[key].length, ...saved.data[key]);
    }
  });
  if (saved.activeHierarchyId && data.hierarchies.some((h) => h.id === saved.activeHierarchyId)) {
    state.activeHierarchyId = saved.activeHierarchyId;
  }
  if (saved.activeProductListId && data.productLists.some((list) => list.id === saved.activeProductListId)) {
    state.activeProductListId = saved.activeProductListId;
  }
  if (!data.productLists.some((list) => list.id === state.activeProductListId)) {
    state.activeProductListId = data.productLists[0]?.id || "base";
  }
  if (Array.isArray(saved.changes)) state.changes = saved.changes.slice(0, 80);
  return true;
}

function loadLocalCatalogState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    applySavedCatalogState(saved);
  } catch (error) {
    console.warn("No se pudo recuperar el catalogo local", error);
  }
}

function openCatalogDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB no disponible"));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(DB_STORE, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function loadCatalogFromIndexedDb() {
  try {
    const db = await openCatalogDb();
    const saved = await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readonly");
      const request = tx.objectStore(DB_STORE).get("current");
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    if (applySavedCatalogState(saved)) {
      data.nodes.forEach((node) => { if (!node.hierarchyId) node.hierarchyId = "v16"; });
      normalizeProductSources();
      const repaired = data.hierarchies.reduce((sum, hierarchy) => sum + consolidateEquivalentNodes(hierarchy.id), 0);
      if (repaired) markDataDirty();
      invalidateRenderCache();
      renderAll();
    }
  } catch (error) {
    console.warn("No se pudo recuperar IndexedDB", error);
  }
}

function saveLocalCatalogState() {
  if (importInProgress) {
    markDataDirty();
    return;
  }
  if (window.requestIdleCallback) {
    requestIdleCallback(() => persistCatalogState(), { timeout: 8000 });
    return;
  }
  setTimeout(persistCatalogState, 0);
}

function persistCatalogState() {
  if (importInProgress) {
    markDataDirty();
    return;
  }
  const payload = {
    id: "current",
    savedAt: new Date().toISOString(),
    activeHierarchyId: state.activeHierarchyId,
    activeProductListId: state.activeProductListId,
    changes: state.changes.slice(0, 80),
    data: {
      hierarchies: data.hierarchies,
      productLists: data.productLists,
      assistantDecisions: data.assistantDecisions || [],
      hierarchyListLinks: data.hierarchyListLinks,
      nodes: data.nodes,
      products: data.products
    }
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      savedAt: payload.savedAt,
      activeHierarchyId: payload.activeHierarchyId,
      activeProductListId: payload.activeProductListId,
      changes: payload.changes,
      productDataInIndexedDb: payload.data.products.length > 2500,
      data: {
        hierarchies: payload.data.hierarchies,
        productLists: payload.data.productLists,
        assistantDecisions: payload.data.assistantDecisions,
        hierarchyListLinks: payload.data.hierarchyListLinks,
        nodes: payload.data.nodes,
        products: payload.data.products.length > 2500 ? [] : payload.data.products
      }
    }));
  } catch (error) {
    console.warn("No se pudo guardar resumen local", error);
  }
  openCatalogDb()
    .then((db) => new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readwrite");
      tx.objectStore(DB_STORE).put(payload);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    }))
    .then(() => { dataDirty = false; })
    .catch((error) => console.warn("No se pudo guardar catalogo grande", error));
}

function updateAutosaveStatus(status = "idle", text = "") {
  const card = document.querySelector(".sync-card");
  const label = $("autosaveStatus");
  if (!card || !label) return;
  card.classList.remove("saving", "saved", "error");
  if (status) card.classList.add(status);
  label.textContent = text || (firebaseUser ? "Cambios guardados automaticamente en DEV." : LOCAL_TEST_MODE ? "Modo local de prueba. Cambios guardados solo en este navegador." : "Entra con Google para recuperar y guardar tu espacio DEV.");
}

function markDataDirty() {
  dataDirty = true;
  firebaseDirty = true;
  clearTimeout(saveTimer);
  clearTimeout(firebaseSaveTimer);
  if (importInProgress) return;
  updateAutosaveStatus(firebaseUser ? "saving" : "idle", firebaseUser ? "Cambios pendientes de sincronizar..." : LOCAL_TEST_MODE ? "Modo local de prueba. Cambios guardados solo en este navegador." : "Cambios locales pendientes. Entra con Google para sincronizar DEV.");
  saveTimer = setTimeout(saveLocalCatalogState, 12000);
  if (firebaseReady && firebaseUser) firebaseSaveTimer = setTimeout(saveAdminStateToFirebaseSilent, 18000);
}

loadLocalCatalogState();
data.nodes.forEach((node) => { if (!node.hierarchyId) node.hierarchyId = "v16"; });
function normalizeProductSources() {
  const listIds = new Set(data.productLists.map((list) => list.id));
  if (!listIds.has("base")) {
    data.productLists.unshift({ id: "base", name: "Productos base maestro", products: 0 });
    listIds.add("base");
  }
  data.products.forEach((product) => {
    product.id = cellText(product.id);
    product.name = cellText(product.name || product.nom || product.id);
    product.status = product.status || "pending";
    product.listIds = product.listIds || ["base"];
    if (!product.listIds.length) product.listIds = ["base"];
    product.listIds = Array.from(new Set(product.listIds.filter((listId) => listIds.has(listId))));
    if (!product.listIds.length) product.listIds = ["base"];
    product.listAttributes = product.listAttributes || {};
    if (product.attributes) {
      product.listIds.forEach((listId) => {
        if (!product.listAttributes[listId]) product.listAttributes[listId] = { ...product.attributes };
      });
    }
    product.assignments = product.assignments || { v16: product.originalNode || product.node };
  });
  data.productLists.forEach((list) => {
    list.products = data.products.filter((product) => (product.listIds || []).includes(list.id)).length;
  });
}
normalizeProductSources();
const nodeHierarchy = (node) => node.hierarchyId || "v16";
function compareNodeOrder(a, b) {
  const ao = Number.isFinite(Number(a.order)) ? Number(a.order) : Number.MAX_SAFE_INTEGER;
  const bo = Number.isFinite(Number(b.order)) ? Number(b.order) : Number.MAX_SAFE_INTEGER;
  if (ao !== bo) return ao - bo;
  return data.nodes.indexOf(a) - data.nodes.indexOf(b);
}
const activeNodes = () => renderCache?.hierarchyId === state.activeHierarchyId ? renderCache.activeNodes : data.nodes.filter((n) => nodeHierarchy(n) === state.activeHierarchyId);
const nodeById = () => renderCache?.nodeMap || Object.fromEntries(data.nodes.map((n) => [n.id, n]));
const childrenOf = (id) => {
  if (renderCache?.hierarchyId === state.activeHierarchyId) return renderCache.childrenByParent.get(id || "") || [];
  return activeNodes().filter((n) => n.parent === id).sort(compareNodeOrder);
};
const productNode = (p) => p.assignments?.[state.activeHierarchyId] || (state.activeHierarchyId === "v16" ? p.originalNode : p.node);
const repairedLocalNodes = data.hierarchies.reduce((sum, hierarchy) => sum + consolidateEquivalentNodes(hierarchy.id), 0);
if (repairedLocalNodes) markDataDirty();
loadCatalogFromIndexedDb();

function buildRenderCache() {
  if (renderCache?.hierarchyId === state.activeHierarchyId) return renderCache;
  const nodeMap = Object.fromEntries(data.nodes.map((n) => [n.id, n]));
  const activeNodeList = data.nodes.filter((n) => nodeHierarchy(n) === state.activeHierarchyId);
  const childrenByParent = new Map();
  activeNodeList.forEach((node) => {
    const key = node.parent || "";
    if (!childrenByParent.has(key)) childrenByParent.set(key, []);
    childrenByParent.get(key).push(node);
  });
  childrenByParent.forEach((items) => items.sort(compareNodeOrder));
  const productCounts = new Map();
  data.products.forEach((product) => {
    let current = nodeMap[productNode(product)];
    while (current && nodeHierarchy(current) === state.activeHierarchyId) {
      productCounts.set(current.id, (productCounts.get(current.id) || 0) + 1);
      current = nodeMap[current.parent];
    }
  });
  renderCache = { hierarchyId: state.activeHierarchyId, nodeMap, activeNodes: activeNodeList, childrenByParent, productCounts };
  return renderCache;
}

function invalidateRenderCache() {
  renderCache = null;
}

function pathFor(nodeId) {
  const map = nodeById();
  const path = [];
  let node = map[nodeId];
  while (node) {
    path.unshift(node);
    node = map[node.parent];
  }
  return path;
}

function activeHierarchy() {
  return data.hierarchies.find((h) => h.id === state.activeHierarchyId) || data.hierarchies[0];
}

function isDescendantOrSelf(nodeId, ancestorId) {
  if (!ancestorId) return true;
  let current = nodeById()[nodeId];
  while (current) {
    if (current.id === ancestorId) return true;
    current = nodeById()[current.parent];
  }
  return false;
}

function countProducts(nodeId) {
  if (nodeId === UNCLASSIFIED_NODE_ID) return activeUnclassifiedProducts().length;
  if (renderCache?.hierarchyId === state.activeHierarchyId) return renderCache.productCounts.get(nodeId) || 0;
  return data.products.filter((p) => isDescendantOrSelf(productNode(p), nodeId)).length;
}

function activeHierarchyProductCount() {
  const map = nodeById();
  const linkedIds = activeHierarchyLinkedListIds();
  return data.products.filter((product) => {
    const assignedNode = productNode(product);
    const assignedHere = assignedNode && map[assignedNode] && nodeHierarchy(map[assignedNode]) === state.activeHierarchyId;
    const linkedHere = linkedIds.some((listId) => (product.listIds || []).includes(listId));
    return assignedHere || linkedHere;
  }).length;
}

function ensureRenderableFocus() {
  if (!state.selectedNode || state.selectedNode === UNCLASSIFIED_NODE_ID) return;
  const node = nodeById()[state.selectedNode];
  if (!node || nodeHierarchy(node) !== state.activeHierarchyId) state.selectedNode = null;
}

function visibleProducts() {
  ensureRenderableFocus();
  const focusNode = focusedNodeId();
  const map = nodeById();
  const linkedIds = activeHierarchyLinkedListIds();
  return data.products.filter((p) => {
    const assignedNode = productNode(p);
    const inHierarchy = assignedNode && map[assignedNode] && nodeHierarchy(map[assignedNode]) === state.activeHierarchyId;
    const linkedOnly = !inHierarchy && linkedIds.some((listId) => (p.listIds || []).includes(listId));
    const inNode = focusNode === UNCLASSIFIED_NODE_ID
      ? linkedOnly
      : (!focusNode || (assignedNode && isDescendantOrSelf(assignedNode, focusNode)));
    const q = state.productSearch.trim().toLowerCase();
    const matchesQ = !q || cellText(p.id).toLowerCase().includes(q) || cellText(p.name).toLowerCase().includes(q);
    const matchesStatus = state.status === "all" || p.status === state.status;
    return (inHierarchy || linkedOnly) && inNode && matchesQ && matchesStatus;
  });
}

function focusedNodeId() {
  if (state.operation.type && state.activePane === "target") return state.operation.targetNode;
  return state.selectedNode;
}

function renderTree() {
  const q = state.treeSearch.trim().toLowerCase();
  const roots = childrenOf(null);
  const rows = [];
  const walk = (node) => {
    const path = pathFor(node.id).map((n) => n.name).join(" ").toLowerCase();
    const hasMatch = !q || path.includes(q) || node.name.toLowerCase().includes(q);
    const childNodes = childrenOf(node.id);
    const visuallyRedundant = isVisuallyRedundant(node);
    if (hasMatch) {
      if (!(state.hideRedundant && visuallyRedundant)) rows.push(node);
      if (q || state.expandedNodes.has(node.id)) childNodes.forEach(walk);
    } else {
      const before = rows.length;
      childNodes.forEach(walk);
      if (rows.length > before) rows.splice(before, 0, node);
    }
  };
  roots.forEach(walk);

  const unclassifiedCount = activeUnclassifiedProducts().length;
  const unclassifiedHtml = unclassifiedCount ? `
    <button class="tree-node tree-level-0 unclassified-node${state.selectedNode === UNCLASSIFIED_NODE_ID ? " active" : ""}" data-node="${UNCLASSIFIED_NODE_ID}">
      <span class="level-mark" aria-hidden="true"></span>
      <span class="twisty"></span>
      <span class="node-name">No clasificados</span>
      <span class="node-count">${unclassifiedCount}</span>
    </button>
  ` : "";
  $("tree").innerHTML = rows.map((node) => {
    const active = state.selectedNode === node.id ? " active" : "";
    const focus = state.operation.type && state.activePane === "source" && state.selectedNode === node.id ? " focus-source" : "";
    const visual = isVisuallyRedundant(node) ? " visual-skip" : "";
    const level = ` tree-level-${node.level}`;
    const hasChildren = childrenOf(node.id).length > 0;
    const expanded = state.expandedNodes.has(node.id);
    return `
      <button class="tree-node${active}${focus}${visual}${level}" data-node="${node.id}">
        <span class="level-mark" aria-hidden="true"></span>
        <span class="twisty ${hasChildren ? "has-children" : ""} ${expanded ? "expanded" : ""}" data-toggle-node="${node.id}">${hasChildren ? ">" : ""}</span>
        <span class="node-name">${node.name}</span>
        <span class="node-count">${countProducts(node.id)}</span>
      </button>
    `;
  }).join("") + unclassifiedHtml;
}

function isVisuallyRedundant(node) {
  const childNodes = childrenOf(node.id);
  return countProducts(node.id) === 0 && childNodes.length === 1;
}

function branchNodeIds(nodeId) {
  const ids = [nodeId];
  childrenOf(nodeId).forEach((child) => ids.push(...branchNodeIds(child.id)));
  return ids;
}

function expandBranch(nodeId = state.selectedNode) {
  const selected = nodeId ? nodeById()[nodeId] : null;
  const maxLevelToOpen = selected ? selected.level : 0;
  activeNodes().forEach((node) => {
    if (node.level <= maxLevelToOpen && childrenOf(node.id).length) state.expandedNodes.add(node.id);
  });
  renderAll();
}

function collapseBranch(nodeId = state.selectedNode) {
  const selected = nodeId ? nodeById()[nodeId] : null;
  if (!selected) {
    state.expandedNodes.clear();
    renderAll();
    return;
  }
  const thresholdLevel = Math.max(0, selected.level - 1);
  activeNodes().forEach((node) => {
    if (node.level >= thresholdLevel) state.expandedNodes.delete(node.id);
  });
  state.selectedNode = selected.parent || selected.id;
  renderAll();
}

function renderHierarchySelector() {
  const select = $("hierarchySelect");
  if (!select) return;
  select.innerHTML = data.hierarchies.map((h) => `<option value="${h.id}" ${h.id === state.activeHierarchyId ? "selected" : ""}>${h.name}</option>`).join("");
  const subtitle = $("rightPanelSubtitle");
  const productCount = activeHierarchyProductCount();
  const hierarchy = activeHierarchy();
  if (hierarchy) hierarchy.products = productCount;
  const treeCount = $("treeCount");
  if (treeCount) treeCount.textContent = `${activeNodes().length} nodos | ${productCount} productos`;
  if (subtitle) subtitle.textContent = state.selectedProduct ? "Producto seleccionado" : "Sin producto seleccionado";
}

function activeProductList() {
  return data.productLists.find((list) => list.id === state.activeProductListId) || data.productLists[0];
}

function productListCount(listId) {
  return data.products.filter((product) => (product.listIds || []).includes(listId)).length;
}

function activeHierarchyListLinks() {
  return (data.hierarchyListLinks || []).filter((link) => link.hierarchyId === state.activeHierarchyId);
}

function activeHierarchyLinkedListIds() {
  return activeHierarchyListLinks().map((link) => link.listId);
}

function activeHierarchyLinkedLists() {
  const ids = new Set(activeHierarchyLinkedListIds());
  return data.productLists.filter((list) => ids.has(list.id));
}

function ensureCatalogLinkedList() {
  const linked = activeHierarchyLinkedLists();
  if (!linked.length) return "";
  if (!linked.some((list) => list.id === state.activeProductListId)) {
    state.activeProductListId = linked[0].id;
  }
  return state.activeProductListId;
}

function isProductLinkedToActiveHierarchy(product) {
  const linkedLists = activeHierarchyLinkedListIds();
  return linkedLists.some((listId) => (product.listIds || []).includes(listId));
}

function productBelongsToActiveHierarchy(product) {
  const assignedNode = productNode(product);
  const node = assignedNode ? nodeById()[assignedNode] : null;
  return !!(node && nodeHierarchy(node) === state.activeHierarchyId) || isProductLinkedToActiveHierarchy(product);
}

function isProductUnclassifiedInActiveHierarchy(product) {
  const assignedNode = productNode(product);
  const node = assignedNode ? nodeById()[assignedNode] : null;
  const assignedHere = !!(node && nodeHierarchy(node) === state.activeHierarchyId);
  return !assignedHere && isProductLinkedToActiveHierarchy(product);
}

function activeUnclassifiedProducts() {
  return data.products.filter((product) => isProductUnclassifiedInActiveHierarchy(product));
}

function productListAttributes(product, listId) {
  return product.listAttributes?.[listId] || {};
}

function mergedProductAttributes(product, preferredListIds = []) {
  const merged = {};
  const sources = product.listAttributes || {};
  preferredListIds.forEach((listId) => Object.assign(merged, sources[listId] || {}));
  Object.values(sources).forEach((attrs) => Object.assign(merged, attrs || {}));
  Object.assign(merged, product.attributes || {});
  return merged;
}

function hasAttributeValue(attrs, key) {
  return attrs && Object.prototype.hasOwnProperty.call(attrs, key) && cellText(attrs[key]) !== "";
}

function isUsableAttributeKey(key) {
  const text = cellText(key);
  if (!text) return false;
  if (/^\d+([.,]\d+)?$/.test(text)) return false;
  if (/^columna\s*\d+$/i.test(text)) return false;
  return true;
}

function visibleProductAttributeEntries(product, limit = 4) {
  const linkedIds = activeHierarchyLinkedListIds();
  const preferredIds = linkedIds.includes(state.activeProductListId)
    ? [state.activeProductListId, ...linkedIds.filter((id) => id !== state.activeProductListId)]
    : linkedIds;
  const entries = [];
  preferredIds.forEach((listId) => {
    const list = data.productLists.find((item) => item.id === listId);
    const attrs = mergedProductAttributes(product, [listId]);
    Object.entries(attrs).forEach(([key, value]) => {
      const text = cellText(value);
      if (text && entries.length < limit) entries.push({ key, value: text, listName: list?.name || "Lista" });
    });
  });
  if (!entries.length && product.price) entries.push({ key: "Precio", value: `$${product.price.toLocaleString("es-CL")}`, listName: "Base" });
  return entries;
}

function renderProductListSelector() {
  const select = $("productListSelect");
  if (select && !data.productLists.some((list) => list.id === state.activeProductListId)) {
    state.activeProductListId = data.productLists[0]?.id || "";
  }
  if (select) select.innerHTML = data.productLists.map((list) => `<option value="${list.id}" ${list.id === state.activeProductListId ? "selected" : ""}>${list.name}</option>`).join("");
  const list = activeProductList();
  const count = list ? productListCount(list.id) : 0;
  if (list) list.products = count;
  const countEl = $("productListCount");
  if (countEl) {
    const connected = (data.hierarchyListLinks || []).some((link) => link.hierarchyId === state.activeHierarchyId && link.listId === list?.id);
    countEl.textContent = `${count} productos${connected ? " · conectada" : ""}`;
  }
  renderCatalogLinkedListSelector();
}

function renderCatalogLinkedListSelector() {
  const select = $("catalogLinkedListSelect");
  if (!select) return;
  const linked = activeHierarchyLinkedLists();
  if (!linked.length) {
    select.innerHTML = `<option value="">Sin listas conectadas</option>`;
    select.disabled = true;
    return;
  }
  const activeId = state.activeView === "catalog" ? ensureCatalogLinkedList() : (linked.some((list) => list.id === state.activeProductListId) ? state.activeProductListId : linked[0].id);
  select.disabled = false;
  select.innerHTML = linked.map((list) => `<option value="${list.id}" ${list.id === activeId ? "selected" : ""}>${list.name}</option>`).join("");
}

function deleteActiveProductList() {
  const list = activeProductList();
  if (!list) return;
  if (data.productLists.length <= 1) {
    openModal("No se puede eliminar", `
      <div class="empty-state">
        <h3>Debe existir al menos una lista</h3>
        <p>Carga o crea otra lista antes de eliminar esta.</p>
      </div>
    `, () => {}, { confirmText: "Aceptar", hideCancel: true });
    return;
  }
  const productCount = productListCount(list.id);
  const links = (data.hierarchyListLinks || []).filter((link) => link.listId === list.id);
  openModal("Eliminar lista", `
    <div class="rule-note">
      Se eliminara la lista <strong>${list.name}</strong>, sus atributos cargados y sus conexiones con jerarquias.
      No se borran las fichas de producto ni sus ubicaciones ya clasificadas.
    </div>
    <div class="load-preview">
      <div class="load-pill"><strong>${productCount}</strong> productos en la lista</div>
      <div class="load-pill"><strong>${links.length}</strong> conexion(es) con jerarquias</div>
    </div>
  `, () => {
    pushHistory("eliminar lista");
    const listId = list.id;
    data.productLists.splice(0, data.productLists.length, ...data.productLists.filter((item) => item.id !== listId));
    data.hierarchyListLinks.splice(0, data.hierarchyListLinks.length, ...(data.hierarchyListLinks || []).filter((link) => link.listId !== listId));
    data.products.forEach((product) => {
      product.listIds = (product.listIds || []).filter((id) => id !== listId);
      if (product.listAttributes) delete product.listAttributes[listId];
    });
    state.activeProductListId = data.productLists[0]?.id || "";
    state.selectedProduct = null;
    state.selectedProducts.clear();
    addChange("Lista eliminada", `"${list.name}" fue eliminada. Los productos y jerarquias se conservaron.`);
  }, { confirmText: "Eliminar lista" });
}

function connectionStats(list, hierarchy) {
  const productsInList = data.products.filter((product) => (product.listIds || []).includes(list.id));
  const classified = productsInList.filter((product) => {
    const assigned = product.assignments?.[hierarchy.id] || (hierarchy.id === state.activeHierarchyId ? productNode(product) : null);
    const node = assigned ? nodeById()[assigned] : null;
    return !!(node && nodeHierarchy(node) === hierarchy.id);
  });
  return { productsInList, classified, unclassified: productsInList.length - classified.length };
}

function connectListToHierarchyDirect(listId, hierarchyId) {
  const hierarchy = data.hierarchies.find((item) => item.id === hierarchyId);
  const list = data.productLists.find((item) => item.id === listId);
  if (!hierarchy || !list) return null;
  const stats = connectionStats(list, hierarchy);
  data.hierarchyListLinks = data.hierarchyListLinks || [];
  const now = new Date().toISOString();
  const link = data.hierarchyListLinks.find((item) => item.hierarchyId === hierarchy.id && item.listId === list.id);
  const payload = { matched: stats.classified.length, unmatched: stats.unclassified, productCount: stats.productsInList.length, updatedAt: now };
  pushHistory("conectar lista");
  if (link) Object.assign(link, payload);
  else data.hierarchyListLinks.push({ id: `hl-${Date.now()}`, hierarchyId: hierarchy.id, listId: list.id, createdAt: now, ...payload });
  state.activeHierarchyId = hierarchy.id;
  state.activeProductListId = list.id;
  addChange("Lista conectada", `${list.name} quedo conectada a ${hierarchy.name}: ${stats.classified.length} clasificados y ${stats.unclassified} no clasificados.`);
  markDataDirty();
  return { hierarchy, list, ...stats };
}

function connectActiveListToHierarchy() {
  const hierarchy = activeHierarchy();
  connectActiveListToHierarchyId(hierarchy?.id);
}

function connectActiveListToHierarchyId(hierarchyId) {
  const hierarchy = data.hierarchies.find((item) => item.id === hierarchyId);
  const list = activeProductList();
  if (!hierarchy || !list) return;
  const { productsInList, classified, unclassified } = connectionStats(list, hierarchy);
  const existing = (data.hierarchyListLinks || []).find((link) => link.hierarchyId === hierarchy.id && link.listId === list.id);
  openModal("Conectar lista a jerarquia", `
    <div class="rule-note">
      La lista <strong>${list.name}</strong> quedara conectada con <strong>${hierarchy.name}</strong>.
      Los productos con ubicacion por codigo se veran clasificados; los demas quedaran como no clasificados en esta jerarquia para poder trabajarlos despues.
    </div>
    <div class="load-preview">
      <div class="load-pill"><strong>${productsInList.length}</strong> productos conectados</div>
      <div class="load-pill"><strong>${classified.length}</strong> ya clasificados</div>
      <div class="load-pill"><strong>${unclassified}</strong> no clasificados</div>
      <div class="load-pill"><strong>${existing ? "Actualizar" : "Nueva"}</strong> conexion</div>
    </div>
  `, () => {
    connectListToHierarchyDirect(list.id, hierarchy.id);
  }, { confirmText: existing ? "Actualizar conexion" : "Conectar lista" });
}

function disconnectListFromHierarchy(listId, hierarchyId) {
  const list = data.productLists.find((item) => item.id === listId);
  const hierarchy = data.hierarchies.find((item) => item.id === hierarchyId);
  if (!list || !hierarchy) return;
  const link = (data.hierarchyListLinks || []).find((item) => item.listId === listId && item.hierarchyId === hierarchyId);
  if (!link) return;
  openModal("Desconectar lista", `
    <div class="rule-note">
      Se quitara la conexion entre <strong>${list.name}</strong> y <strong>${hierarchy.name}</strong>.
      No se elimina la lista, la jerarquia ni los productos.
    </div>
  `, () => {
    pushHistory("desconectar lista");
    data.hierarchyListLinks.splice(0, data.hierarchyListLinks.length, ...(data.hierarchyListLinks || []).filter((item) => !(item.listId === listId && item.hierarchyId === hierarchyId)));
    addChange("Lista desconectada", `${list.name} fue desconectada de ${hierarchy.name}.`);
    markDataDirty();
  }, { confirmText: "Desconectar" });
}

function disconnectActiveCatalogList() {
  const listId = $("catalogLinkedListSelect")?.value || state.activeProductListId;
  if (!listId || !state.activeHierarchyId) return;
  disconnectListFromHierarchy(listId, state.activeHierarchyId);
}

function disconnectActiveListConnection() {
  const list = activeProductList();
  const hierarchyId = $("listConnectedHierarchySelect")?.value;
  if (!list || !hierarchyId) return;
  disconnectListFromHierarchy(list.id, hierarchyId);
}

function openConnectListModal() {
  const list = activeProductList();
  if (!list) return;
  const links = (data.hierarchyListLinks || []).filter((link) => link.listId === list.id);
  const linkedIds = new Set(links.map((link) => link.hierarchyId));
  openModal("Conectar lista a jerarquia", `
    <div class="rule-note">
      Elige una jerarquia para conectar <strong>${list.name}</strong>. Las jerarquias ya conectadas aparecen bloqueadas.
    </div>
    <div class="form-row">
      <label>Jerarquia destino</label>
      <select id="connectListHierarchySelect">
        ${data.hierarchies.map((hierarchy) => `
          <option value="${hierarchy.id}" ${linkedIds.has(hierarchy.id) ? "disabled" : ""}>
            ${hierarchy.name}${linkedIds.has(hierarchy.id) ? " - ya conectada" : ""}
          </option>
        `).join("")}
      </select>
    </div>
  `, () => {
    const selected = $("connectListHierarchySelect")?.value;
    if (selected) connectListToHierarchyDirect(list.id, selected);
  }, { confirmText: "Conectar" });
}

function duplicateActiveHierarchy() {
  const sourceHierarchy = activeHierarchy();
  const name = `${sourceHierarchy.name} copia`;
  const nodeCount = activeNodes().length;
  const productCount = activeHierarchyProductCount();
  openModal("Duplicar jerarquia", `
    <div class="rule-note">
      Se creara una copia editable de <strong>${sourceHierarchy.name}</strong> como <strong>${name}</strong>.
      La copia mantiene la estructura y las ubicaciones de productos, sin borrar ni modificar la jerarquia original.
    </div>
    <div class="load-preview">
      <div class="load-pill"><strong>${nodeCount}</strong> nodos</div>
      <div class="load-pill"><strong>${productCount}</strong> productos ubicados</div>
      <div class="load-pill"><strong>1</strong> nueva jerarquia</div>
    </div>
  `, () => {
    const newId = `h-${Date.now()}`;
    const idMap = {};
    pushHistory("duplicar jerarquia");
    activeNodes()
      .sort((a, b) => a.level - b.level)
      .forEach((node) => {
        const newNodeId = `n-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        idMap[node.id] = newNodeId;
        data.nodes.push({
          ...structuredClone(node),
          id: newNodeId,
          parent: node.parent ? idMap[node.parent] : null,
          hierarchyId: newId
        });
      });
    data.products.forEach((product) => {
      const assigned = productNode(product);
      if (assigned && idMap[assigned]) {
        product.assignments = product.assignments || {};
        product.assignments[newId] = idMap[assigned];
      }
    });
    data.hierarchies.push({ id: newId, name, status: "Editable", products: productCount });
    state.activeHierarchyId = newId;
    state.selectedNode = null;
    state.expandedNodes = new Set(activeNodes().filter((node) => node.level < 2).map((node) => node.id));
    addChange("Jerarquia duplicada", `"${sourceHierarchy.name}" fue duplicada como "${name}".`);
    renderAll();
  }, { confirmText: "Duplicar jerarquia" });
}

function deleteActiveHierarchy() {
  const hierarchy = activeHierarchy();
  if (!hierarchy) return;
  if (data.hierarchies.length <= 1) {
    openModal("No se puede eliminar", `
      <div class="empty-state">
        <h3>Debe existir al menos una jerarquia</h3>
        <p>Crea o carga otra jerarquia antes de eliminar esta.</p>
      </div>
    `, () => {}, { confirmText: "Aceptar", hideCancel: true });
    return;
  }
  const nodeCount = activeNodes().length;
  const productCount = activeHierarchyProductCount();
  const linkCount = (data.hierarchyListLinks || []).filter((link) => link.hierarchyId === hierarchy.id).length;
  openModal("Eliminar jerarquia", `
    <div class="rule-note">
      Se eliminara la estructura <strong>${hierarchy.name}</strong> y sus ubicaciones de productos en esta jerarquia.
      Tambien se eliminaran sus conexiones con listas. Las listas y las fichas de producto no se borran.
    </div>
    <div class="load-preview">
      <div class="load-pill"><strong>${nodeCount}</strong> nodos</div>
      <div class="load-pill"><strong>${productCount}</strong> productos ubicados</div>
      <div class="load-pill"><strong>${linkCount}</strong> conexion(es) con listas</div>
    </div>
  `, () => {
    pushHistory("eliminar jerarquia");
    const hierarchyId = state.activeHierarchyId;
    data.hierarchies.splice(0, data.hierarchies.length, ...data.hierarchies.filter((item) => item.id !== hierarchyId));
    data.nodes.splice(0, data.nodes.length, ...data.nodes.filter((node) => nodeHierarchy(node) !== hierarchyId));
    data.hierarchyListLinks.splice(0, data.hierarchyListLinks.length, ...(data.hierarchyListLinks || []).filter((link) => link.hierarchyId !== hierarchyId));
    data.products.forEach((product) => {
      if (product.assignments) delete product.assignments[hierarchyId];
      if (product.node && !nodeById()[product.node]) product.node = product.originalNode || null;
    });
    state.activeHierarchyId = data.hierarchies[0].id;
    state.selectedNode = null;
    state.selectedProduct = null;
    state.selectedProducts.clear();
    state.expandedNodes = new Set(activeNodes().filter((node) => node.level < 1).map((node) => node.id));
    addChange("Jerarquia eliminada", `"${hierarchy.name}" fue eliminada. Los productos base se conservaron.`);
  }, { confirmText: "Eliminar jerarquia" });
}

function renderTargetTree() {
  const panel = $("destinationPanel");
  const workspace = $("workspace");
  if (!panel || !workspace) return;
  const op = state.operation;
  const isActive = !!op.type;
  panel.hidden = !isActive;
  workspace.classList.toggle("operation-mode", isActive);
  if (!isActive) return;

  const q = op.targetSearch.trim().toLowerCase();
  const rows = [];
  const walk = (node) => {
    const path = pathFor(node.id).map((n) => n.name).join(" ").toLowerCase();
    const hasMatch = !q || path.includes(q) || node.name.toLowerCase().includes(q);
    const childNodes = childrenOf(node.id);
    if (hasMatch) {
      rows.push(node);
      if (q || op.targetExpandedNodes.has(node.id)) childNodes.forEach(walk);
    } else {
      const before = rows.length;
      childNodes.forEach(walk);
      if (rows.length > before) rows.splice(before, 0, node);
    }
  };
  childrenOf(null).forEach(walk);

  $("targetTree").innerHTML = rows.map((node) => {
    const hasChildren = childrenOf(node.id).length > 0;
    const expanded = op.targetExpandedNodes.has(node.id);
    const valid = isValidOperationTarget(node.id);
    const selected = op.targetNode === node.id ? " active focus-target" : "";
    const validity = valid ? " valid-target" : " invalid-target";
    return `
      <button class="tree-node${selected}${validity} tree-level-${node.level}" data-target-node="${node.id}">
        <span class="level-mark" aria-hidden="true"></span>
        <span class="twisty ${hasChildren ? "has-children" : ""} ${expanded ? "expanded" : ""}" data-target-toggle="${node.id}">${hasChildren ? ">" : ""}</span>
        <span class="node-name">${node.name}</span>
        <span class="node-count">${countProducts(node.id)}</span>
      </button>
    `;
  }).join("");
  $("targetTreeCount").textContent = op.type === "merge" ? "Segundo nodo" : "Destino posible";
  renderOperationCard();
}

function operationTitle() {
  if (state.operation.type === "merge") return "Fusionar nodos";
  if (state.operation.type === "move-node") return "Mover nodo";
  return "";
}

function renderOperationCard() {
  const card = $("operationCard");
  if (!card || !state.operation.type) return;
  const op = state.operation;
  const source = op.sourceNode ? nodeById()[op.sourceNode] : null;
  const target = op.targetNode ? nodeById()[op.targetNode] : null;
  const sourceText = source ? `${levelNames[source.level]}: ${source.name}` : "Selecciona origen";
  const targetText = target ? `${levelNames[target.level]}: ${target.name}` : "Selecciona destino";
  const validTarget = target && isValidOperationTarget(target.id);

  if (op.type === "merge") {
    const defaultName = source && target ? `${source.name} y ${target.name}` : "";
    if (!op.mergeName && defaultName) op.mergeName = defaultName;
    card.innerHTML = `
      <div class="operation-title">
        <strong>${operationTitle()}</strong>
        <button class="ghost-btn" data-operation-cancel>Cancelar</button>
      </div>
      <div class="operation-summary">
        <span>Origen: <strong>${sourceText}</strong></span>
        <span>Segundo nodo: <strong>${targetText}</strong></span>
      </div>
      <div class="merge-options">
        <label>Nombre del nuevo nodo
          <input id="mergeNameInput" value="${op.mergeName}" placeholder="Nombre fusionado">
        </label>
        <label>Ubicacion final
          <select id="mergeLocationSelect">
            <option value="source" ${op.mergeLocation === "source" ? "selected" : ""}>Donde estaba el origen</option>
            <option value="target" ${op.mergeLocation === "target" ? "selected" : ""}>Donde estaba el destino</option>
          </select>
        </label>
      </div>
      <div class="operation-actions">
        <button class="primary-btn" data-operation-confirm ${validTarget ? "" : "disabled"}>Fusionar nodos</button>
      </div>
    `;
    return;
  }

  card.innerHTML = `
    <div class="operation-title">
      <strong>${operationTitle()}</strong>
      <button class="ghost-btn" data-operation-cancel>Cancelar</button>
    </div>
    <div class="operation-summary">
      <span>Origen: <strong>${sourceText}</strong></span>
      <span>Destino: <strong>${targetText}</strong></span>
      <span>${moveTargetHelp(source, target)}</span>
    </div>
    <div class="operation-actions">
      <button class="primary-btn" data-operation-confirm ${validTarget ? "" : "disabled"}>Mover aqui</button>
    </div>
  `;
}

function renderHeader() {
  const focusNode = focusedNodeId();
  const isUnclassified = focusNode === UNCLASSIFIED_NODE_ID;
  const node = focusNode ? nodeById()[focusNode] : null;
  const products = filteredCatalogProducts();
  const activePane = state.operation.type ? (state.activePane === "target" ? "Destino activo" : "Origen activo") : "Catalogo";
  $("crumbs").innerHTML = isUnclassified
    ? `<span class="active-pane-note">${activePane}</span> Productos conectados sin ubicacion`
    : (node ? `<span class="active-pane-note">${activePane}</span> ${pathFor(node.id).map((n) => n.name).join(" / ")}` : "Catalogo completo");
  $("sectionTitle").textContent = isUnclassified ? "No clasificados" : (node ? node.name : "Productos");
  $("visibleProducts").textContent = products.length;
  $("pendingCount").textContent = products.filter((p) => p.status === "pending" || p.status === "suggested").length;
  $("validatedCount").textContent = products.filter((p) => p.status === "validated").length;
}

function compareValues(a, b, dir = "asc") {
  const av = a ?? "";
  const bv = b ?? "";
  const an = Number(String(av).replace(/[.$,\s]/g, "").replace(",", "."));
  const bn = Number(String(bv).replace(/[.$,\s]/g, "").replace(",", "."));
  let result;
  if (String(av).trim() !== "" && String(bv).trim() !== "" && Number.isFinite(an) && Number.isFinite(bn)) result = an - bn;
  else result = String(av).localeCompare(String(bv), "es", { numeric: true, sensitivity: "base" });
  return dir === "desc" ? -result : result;
}

function sortedRows(rows, sort, valueGetter) {
  return [...rows].sort((a, b) => compareValues(valueGetter(a, sort.key), valueGetter(b, sort.key), sort.dir));
}

function filterLabel(value) {
  const text = cellText(value);
  return text || "(vacios)";
}

function escapeHtml(value) {
  return cellText(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function filterBag(kind) {
  return kind === "list" ? state.listFilters : state.productFilters;
}

function activeFilter(kind, key) {
  const filter = filterBag(kind)[key];
  return filter && ((filter.selected || []).length || cellText(filter.query));
}

function applyColumnFilters(rows, filters, valueGetter) {
  const entries = Object.entries(filters || {}).filter(([, filter]) => filter && ((filter.selected || []).length || cellText(filter.query)));
  if (!entries.length) return rows;
  return rows.filter((row) => entries.every(([key, filter]) => {
    const value = filterLabel(valueGetter(row, key));
    const lower = value.toLowerCase();
    const query = cellText(filter.query).toLowerCase();
    const selected = filter.selected || [];
    if (query && !lower.includes(query)) return false;
    if (selected.length && !selected.includes(value)) return false;
    return true;
  }));
}

function uniqueFilterValues(rows, key, valueGetter, query = "", limit = 220) {
  const q = cellText(query).toLowerCase();
  const seen = new Set();
  const values = [];
  rows.forEach((row) => {
    const value = filterLabel(valueGetter(row, key));
    if (seen.has(value)) return;
    if (q && !value.toLowerCase().includes(q)) return;
    seen.add(value);
    values.push(value);
  });
  return values.sort((a, b) => compareValues(a, b, "asc")).slice(0, limit);
}

function activeCatalogAttributeKeys(limit = 8, rows = visibleProducts()) {
  const keys = [];
  const preferred = [state.activeProductListId, ...activeHierarchyLinkedListIds()].filter(Boolean);
  rows.forEach((product) => {
    Object.keys(mergedProductAttributes(product, preferred)).filter(isUsableAttributeKey).forEach((key) => {
      if (!keys.includes(key)) keys.push(key);
    });
  });
  return keys.slice(0, limit);
}

function productSortValue(product, key) {
  if (key === "select") return "";
  if (key === "cod") return cellText(product.id);
  if (key === "nom") return cellText(product.name);
  if (key === "ruta") {
    const node = nodeById()[productNode(product)];
    return node ? pathFor(node.id).map((n) => n.name).join(" / ") : "No clasificado";
  }
  if (key === "estado") return statusLabels[product.status] || "Pendiente";
  const attrs = mergedProductAttributes(product, [state.activeProductListId, ...activeHierarchyLinkedListIds()]);
  return attrs[key] || "";
}

function sortButton(label, key, sort, kind) {
  const active = sort.key === key;
  const arrow = active ? (sort.dir === "asc" ? " ↑" : " ↓") : "";
  const filtered = activeFilter(kind, key);
  return `
    <span class="th-tools">
      <button class="sort-head${active ? " active" : ""}" data-sort="${escapeHtml(key)}">${escapeHtml(label)}${arrow}</button>
      <button class="filter-head${filtered ? " active" : ""}" data-filter-kind="${kind}" data-filter-key="${escapeHtml(key)}" title="Filtrar columna" aria-label="Filtrar ${escapeHtml(label)}">⌕</button>
    </span>
  `;
}

function renderProductTableHead(attrKeys) {
  const head = $("productTableHead");
  if (!head) return;
  head.innerHTML = `
    <th class="select-col"><input id="selectAll" type="checkbox"></th>
    <th class="status-mini-col">${sortButton("E", "estado", state.productSort, "product")}</th>
    <th class="code-col">${sortButton("Codigo", "cod", state.productSort, "product")}</th>
    <th class="name-col">${sortButton("Producto", "nom", state.productSort, "product")}</th>
    ${attrKeys.map((key) => `<th class="attr-col">${sortButton(key, key, state.productSort, "product")}</th>`).join("")}
  `;
}

function filteredCatalogProducts() {
  return applyColumnFilters(visibleProducts(), state.productFilters, productSortValue);
}

function visibleProductIds() {
  return filteredCatalogProducts().map((product) => cellText(product.id)).filter(Boolean);
}

function syncSelectAllState(ids = visibleProductIds()) {
  const selectAll = $("selectAll");
  if (!selectAll) return;
  const total = ids.length;
  const selected = ids.filter((id) => state.selectedProducts.has(id)).length;
  selectAll.disabled = total === 0;
  selectAll.checked = total > 0 && selected === total;
  selectAll.indeterminate = selected > 0 && selected < total;
}

function updateVisibleCheckboxes(checked) {
  document.querySelectorAll("#productRows input[data-check]").forEach((input) => {
    input.checked = checked;
  });
}

function renderProducts() {
  try {
    const baseRows = visibleProducts();
    const attrKeys = activeCatalogAttributeKeys(8, baseRows);
    renderProductTableHead(attrKeys);
    const rows = sortedRows(applyColumnFilters(baseRows, state.productFilters, productSortValue), state.productSort, productSortValue);
    if (!rows.length) {
      $("productRows").innerHTML = `<tr><td colspan="${4 + attrKeys.length}"><div class="empty-state"><h3>Sin productos</h3><p>Ajusta los filtros o selecciona otra jerarquia.</p></div></td></tr>`;
      syncSelectAllState([]);
      return;
    }
    const renderedRows = rows.slice(0, state.productRenderLimit);
    const remaining = rows.length - renderedRows.length;
    $("productRows").innerHTML = renderedRows.map((p) => {
      const productId = cellText(p.id);
      const checked = state.selectedProducts.has(productId) ? "checked" : "";
      const selected = state.selectedProduct === productId ? " selected" : "";
      const attrMap = mergedProductAttributes(p, [state.activeProductListId, ...activeHierarchyLinkedListIds()]);
      const status = p.status || "pending";
      const statusLetter = { pending: "P", suggested: "S", corrected: "C", validated: "V" }[status] || "P";
      return `
        <tr class="product-row${selected}" data-product="${productId}">
          <td class="select-col"><input type="checkbox" data-check="${productId}" ${checked}></td>
          <td class="status-mini-col"><span class="status-dot ${status}" title="${statusLabels[status] || "Pendiente"}">${statusLetter}</span></td>
          <td class="code code-col">${productId}</td>
          <td class="name-col"><div class="product-name">${cellText(p.name)}</div></td>
          ${attrKeys.map((key) => `<td class="table-cell attr-col">${hasAttributeValue(attrMap, key) ? attrMap[key] : ""}</td>`).join("")}
        </tr>
      `;
    }).join("") + (remaining > 0 ? `
      <tr class="table-more-row">
        <td colspan="${4 + attrKeys.length}">
          <button class="ghost-btn table-more-btn" data-load-more-products>
            Mostrar ${Math.min(TABLE_RENDER_BATCH, remaining)} mas · ${remaining} pendientes
          </button>
        </td>
      </tr>
    ` : "");
    syncSelectAllState(rows.map((product) => cellText(product.id)).filter(Boolean));
  } catch (error) {
    console.error("No se pudo renderizar productos", error);
    $("productRows").innerHTML = `<tr><td><div class="load-error"><strong>No se pudo mostrar la tabla</strong><span>${error.message}</span></div></td></tr>`;
  }
}

function renderInspector() {
  const product = data.products.find((p) => p.id === state.selectedProduct);
  const workspace = $("workspace");
  if (workspace) workspace.classList.toggle("no-inspector", !product);
  const rightPanel = document.querySelector(".right-panel");
  if (rightPanel) rightPanel.hidden = !product;
  const subtitle = $("rightPanelSubtitle");
  if (subtitle) subtitle.textContent = product ? "Producto seleccionado" : "Sin producto seleccionado";
  if (!product) {
    const h = activeHierarchy();
    const productCount = activeHierarchyProductCount();
    $("inspector").innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">[]</div>
        <h3>${h.name}</h3>
        <p>${activeNodes().length} nodos y ${productCount} productos totales en esta jerarquia.</p>
      </div>
    `;
    return;
  }
  const activePathNode = productNode(product);
  const fitPath = activePathNode && nodeById()[activePathNode] ? pathFor(activePathNode).map((n) => n.name).join(" / ") : "Sin asignacion en esta jerarquia";
  const v16Path = pathFor(product.originalNode).map((n) => n.name).join(" / ");
  const suggestion = product.suggestion ? pathFor(product.suggestion).map((n) => n.name).join(" / ") : "Sin sugerencia";
  const attrEntries = visibleProductAttributeEntries(product, 12);
  const attrHtml = attrEntries.length ? attrEntries.map((attr) => `
    <div class="detail-item">
      <div class="detail-label">${attr.key}</div>
      <div class="detail-value">${attr.value}</div>
    </div>
  `).join("") : `
    <div class="detail-item">
      <div class="detail-label">Atributos de listas conectadas</div>
      <div class="detail-value">Sin atributos visibles para esta jerarquia</div>
    </div>
  `;
  $("inspector").innerHTML = `
    <div class="detail-card">
      <div class="detail-close-row">
        <button class="ghost-btn" data-action="close-inspector">Cerrar</button>
      </div>
      <div class="detail-actions top-actions-detail">
        <button class="primary-btn" data-action="suggest-destination">Destinos sugeridos</button>
        <button class="primary-btn" data-action="validate-product">Validar</button>
        <button class="ghost-btn" data-action="move-product">Mover</button>
        <button class="ghost-btn" data-action="apply-suggestion">Aplicar sugerencia</button>
        <button class="ghost-btn" data-action="mark-pending">Dejar pendiente</button>
      </div>
      <div>
        <div class="code">${product.id}</div>
        <div class="detail-title">${product.name}</div>
      </div>
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-label">Ubicacion jerarquia activa</div>
          <div class="detail-value">${fitPath}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Ubicacion base del producto</div>
          <div class="detail-value">${v16Path}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Sugerencia</div>
          <div class="detail-value">${suggestion}</div>
        </div>
        ${attrHtml}
      </div>
    </div>
  `;
}

function renderChanges() {
}

function renderAppView() {
  if (state.activeView === "users" && !canManageUsers()) state.activeView = "catalog";
  document.querySelectorAll(".app-view").forEach((view) => {
    view.hidden = view.dataset.view !== state.activeView;
    view.classList.toggle("active", view.dataset.view === state.activeView);
  });
  document.querySelectorAll("[data-top-context]").forEach((context) => {
    context.hidden = context.dataset.topContext !== state.activeView;
  });
  document.querySelectorAll("[data-view-tab]").forEach((tab) => {
    if (tab.dataset.viewTab === "users") tab.hidden = !canManageUsers();
    tab.classList.toggle("active", tab.dataset.viewTab === state.activeView);
  });
}

function listAttributeKeys(listId, limit = 18) {
  const keys = [];
  data.products.forEach((product) => {
    if (!(product.listIds || []).includes(listId)) return;
    Object.keys(mergedProductAttributes(product, [listId])).filter(isUsableAttributeKey).forEach((key) => {
      if (!keys.includes(key)) keys.push(key);
    });
  });
  return keys.slice(0, limit);
}

function listSortValue(product, key) {
  if (key === "cod") return cellText(product.id);
  if (key === "nom") return cellText(product.name);
  return mergedProductAttributes(product, [state.activeProductListId])[key] || "";
}

function baseListProducts(list = activeProductList()) {
  if (!list) return [];
  const q = state.listSearch.trim().toLowerCase();
  return data.products.filter((product) => {
    if (!(product.listIds || []).includes(list.id)) return false;
    if (!q) return true;
    return cellText(product.id).toLowerCase().includes(q) || cellText(product.name).toLowerCase().includes(q);
  });
}

function renderListView() {
  try {
    const rowsEl = $("listRows");
    const head = $("listTableHead");
    if (!rowsEl || !head) return;
    const list = activeProductList();
    if (!list) {
      rowsEl.innerHTML = `<div class="empty-state"><h3>Sin listas</h3></div>`;
      return;
    }
    renderListConnections(list);
    const attrKeys = listAttributeKeys(list.id);
    const rows = sortedRows(applyColumnFilters(baseListProducts(list), state.listFilters, listSortValue), state.listSort, listSortValue);
    head.innerHTML = `
      <th class="code-col">${sortButton("Codigo", "cod", state.listSort, "list")}</th>
      <th class="name-col">${sortButton("Descripcion", "nom", state.listSort, "list")}</th>
      ${attrKeys.map((key) => `<th class="attr-col">${sortButton(key, key, state.listSort, "list")}</th>`).join("")}
    `;
    const renderedRows = rows.slice(0, state.listRenderLimit);
    const remaining = rows.length - renderedRows.length;
    rowsEl.innerHTML = rows.length ? renderedRows.map((product) => {
      const attrs = mergedProductAttributes(product, [list.id]);
      return `
        <tr class="list-row" data-product="${cellText(product.id)}">
          <td class="code code-col">${cellText(product.id)}</td>
          <td class="name-col"><div class="product-name">${cellText(product.name)}</div></td>
          ${attrKeys.map((key) => `<td class="table-cell attr-col">${hasAttributeValue(attrs, key) ? attrs[key] : ""}</td>`).join("")}
        </tr>
      `;
    }).join("") + (remaining > 0 ? `
      <tr class="table-more-row">
        <td colspan="${2 + attrKeys.length}">
          <button class="ghost-btn table-more-btn" data-load-more-list>
            Mostrar ${Math.min(TABLE_RENDER_BATCH, remaining)} mas · ${remaining} pendientes
          </button>
        </td>
      </tr>
    ` : "") : `<tr><td colspan="${2 + attrKeys.length}"><div class="empty-state"><h3>Sin productos</h3><p>Ajusta la busqueda o selecciona otra lista.</p></div></td></tr>`;
  } catch (error) {
    console.error("No se pudo renderizar lista", error);
    if ($("listRows")) $("listRows").innerHTML = `<tr><td><div class="load-error"><strong>No se pudo mostrar la lista</strong><span>${error.message}</span></div></td></tr>`;
  }
}

function filterRowsForMenu(kind) {
  if (kind === "list") return baseListProducts(activeProductList());
  return visibleProducts();
}

function filterGetter(kind) {
  return kind === "list" ? listSortValue : productSortValue;
}

function refreshColumnFilterOptions(menu, kind, key) {
  const search = menu.querySelector("[data-filter-search]")?.value || "";
  const selected = menu._selectedValues || new Set();
  const values = uniqueFilterValues(filterRowsForMenu(kind), key, filterGetter(kind), search);
  const options = menu.querySelector("[data-filter-options]");
  if (!options) return;
  options.innerHTML = values.length
    ? values.map((value) => `
      <label class="filter-option">
        <input type="checkbox" data-filter-value value="${escapeHtml(value)}" ${selected.has(value) ? "checked" : ""}>
        <span>${escapeHtml(value)}</span>
      </label>
    `).join("")
    : `<div class="filter-empty">Sin valores</div>`;
}

function closeColumnFilterMenu() {
  document.querySelector(".column-filter-menu")?.remove();
}

function applyColumnFilter(kind, key, menu) {
  const bag = filterBag(kind);
  const query = cellText(menu.querySelector("[data-filter-search]")?.value);
  const selected = Array.from(menu._selectedValues || []);
  if (query || selected.length) bag[key] = { query, selected };
  else delete bag[key];
  closeColumnFilterMenu();
  if (kind === "list") {
    renderListView();
  } else {
    renderHeader();
    renderProducts();
    renderInspector();
  }
  setActionStates();
}

function openColumnFilterMenu(kind, key, anchor) {
  closeColumnFilterMenu();
  const filter = filterBag(kind)[key] || { query: "", selected: [] };
  const menu = document.createElement("div");
  menu.className = "column-filter-menu";
  menu.dataset.filterMenu = "true";
  menu.dataset.kind = kind;
  menu.dataset.key = key;
  menu._selectedValues = new Set(filter.selected || []);
  menu.innerHTML = `
    <div class="filter-menu-title">Filtrar columna</div>
    <input class="filter-menu-search" data-filter-search type="search" placeholder="Buscar valor" value="${escapeHtml(filter.query || "")}">
    <div class="filter-options" data-filter-options></div>
    <div class="filter-menu-actions">
      <button class="ghost-btn" data-filter-clear>Limpiar</button>
      <button class="primary-btn" data-filter-apply>Aplicar</button>
    </div>
  `;
  document.body.appendChild(menu);
  const rect = anchor.getBoundingClientRect();
  const left = Math.min(rect.left, window.innerWidth - 310);
  const top = Math.min(rect.bottom + 8, window.innerHeight - 390);
  menu.style.left = `${Math.max(8, left)}px`;
  menu.style.top = `${Math.max(8, top)}px`;
  refreshColumnFilterOptions(menu, kind, key);
  menu.querySelector("[data-filter-search]")?.focus();
}

function renderListConnections(list = activeProductList()) {
  if (!list) return;
  const links = (data.hierarchyListLinks || []).filter((link) => link.listId === list.id);
  const select = $("listConnectedHierarchySelect");
  const title = $("connectedHierarchyTitle");
  const button = $("connectListToSelectedHierarchyBtn");
  const linked = links.map((link) => data.hierarchies.find((h) => h.id === link.hierarchyId)).filter(Boolean);
  if (title) title.textContent = linked.length ? `${linked.length} conectada(s)` : "Sin conexiones";
  if (select) {
    select.disabled = !linked.length;
    select.innerHTML = linked.length
      ? linked.map((h) => `<option value="${h.id}">${h.name}</option>`).join("")
      : `<option value="">Sin jerarquias conectadas</option>`;
  }
  if (button) button.disabled = data.hierarchies.length === links.length;
}

function updateProductRowSelection() {
  document.querySelectorAll("#productRows [data-product]").forEach((row) => {
    row.classList.toggle("selected", row.dataset.product === state.selectedProduct);
  });
}

function renderAll() {
  const renderStartedAt = performance.now();
  buildRenderCache();
  renderAppView();
  renderHierarchySelector();
  renderProductListSelector();
  if (state.activeView === "catalog") {
    renderTree();
    renderTargetTree();
    renderHeader();
    renderProducts();
    renderInspector();
  }
  if (state.activeView === "lists") renderListView();
  if (state.activeView === "users") renderUsersView();
  renderChanges();
  setActionStates();
  const renderDuration = performance.now() - renderStartedAt;
  if (renderDuration > 120) {
    console.warn("Render lento detectado", {
      view: state.activeView,
      durationMs: Math.round(renderDuration),
      products: data.products.length,
      nodes: data.nodes.length,
      renderedProductLimit: state.productRenderLimit,
      renderedListLimit: state.listRenderLimit
    });
  }
}

function openModal(title, bodyHtml, onConfirm, options = {}) {
  $("modalTitle").textContent = title;
  $("modalBody").innerHTML = bodyHtml;
  $("modalBackdrop").hidden = false;
  $("modalConfirm").textContent = options.confirmText || "Guardar";
  $("modalConfirm").hidden = false;
  $("modalCancel").textContent = options.cancelText || "Cancelar";
  $("modalCancel").hidden = !!options.hideCancel;
  $("modalConfirm").onclick = async () => {
    const confirmBtn = $("modalConfirm");
    const cancelBtn = $("modalCancel");
    const originalText = confirmBtn.textContent;
    try {
      confirmBtn.disabled = true;
      cancelBtn.disabled = true;
      confirmBtn.textContent = options.busyText || "Guardando...";
      await onConfirm();
      if (!options.keepOpen) closeModal();
      renderAll();
    } catch (error) {
      const oldError = $("modalInlineError");
      if (oldError) oldError.remove();
      $("modalBody").insertAdjacentHTML("afterbegin", `
        <div class="load-error" id="modalInlineError">
          <strong>No se pudo completar</strong>
          <span>${escapeHtml(error?.message || error || "La accion no pudo completarse.")}</span>
        </div>
      `);
    } finally {
      confirmBtn.disabled = false;
      cancelBtn.disabled = false;
      confirmBtn.textContent = originalText;
    }
  };
}

function setProcessingState(active, message = "") {
  importInProgress = active;
  if (active) activeLoadStartedAt = performance.now();
  if (active) clearTimeout(saveTimer);
  $("modalConfirm").disabled = active;
  $("modalCancel").disabled = active;
  let bar = $("processingState");
  if (!active) {
    if (bar) bar.remove();
    if (dataDirty) markDataDirty();
    return;
  }
  if (active && !bar) {
    $("modalBody").insertAdjacentHTML("afterbegin", `
      <div class="processing-state" id="processingState">
        <div class="clock-loader" aria-hidden="true"></div>
        <div>
          <strong>Procesando informacion</strong>
          <span>${message}</span>
        </div>
      </div>
    `);
    return;
  }
  if (bar) {
    bar.querySelector("span").textContent = message;
  }
}

function updateProcessingStatus(message) {
  const bar = $("processingState");
  if (bar) bar.querySelector("span").textContent = message;
  logLoad("estado", message);
}

function showLoadError(title, error) {
  setProcessingState(false);
  const body = $("loadConfig") || $("modalBody");
  const elapsed = activeLoadStartedAt ? ((performance.now() - activeLoadStartedAt) / 1000).toFixed(1) : "0.0";
  if (body) {
    body.insertAdjacentHTML("afterbegin", `
      <div class="load-error">
        <strong>${title}</strong>
        <span>${error?.message || error || "La carga se detuvo sin detalle."}</span>
        <small>Etapa detenida despues de ${elapsed}s. La app no deberia quedar cargando indefinidamente.</small>
      </div>
    `);
  }
}

async function runLoadStep(fn) {
  try {
    await fn();
  } catch (error) {
    console.error("Fallo general de carga", error);
    showLoadError("La carga se detuvo", error);
  }
}

function logLoad(stage, detail = {}) {
  const entry = {
    time: new Date().toLocaleTimeString("es-CL"),
    stage,
    detail: typeof detail === "string" ? detail : JSON.stringify(detail)
  };
  loadDebug.unshift(entry);
  if (loadDebug.length > 80) loadDebug.pop();
  renderLoadDebug();
}

function renderLoadDebug() {
  const container = $("loadDebug");
  if (!container) return;
  container.innerHTML = loadDebug.slice(0, 12).map((entry) => `
    <div class="debug-row">
      <strong>${entry.time}</strong>
      <span>${entry.stage}</span>
      <code>${entry.detail}</code>
    </div>
  `).join("");
}

function copyLoadDebug() {
  const text = loadDebug.map((entry) => `${entry.time} | ${entry.stage} | ${entry.detail}`).join("\n");
  navigator.clipboard?.writeText(text);
  const body = $("loadConfig") || $("modalBody");
  if (body) {
    body.insertAdjacentHTML("afterbegin", `<div class="load-result"><strong>Debug copiado</strong><br>El diagnostico de carga quedo en el portapapeles.</div>`);
  }
}

function progressMessage(label, current, total, extra = "") {
  const percent = total ? Math.round((current / total) * 100) : 0;
  return `${label}... ${current}/${total} filas (${percent}%). ${extra}`.trim();
}

function cellText(value) {
  return String(value ?? "").trim();
}

function closeModal() {
  $("modalBackdrop").hidden = true;
  $("modalConfirm").onclick = null;
  $("modalCancel").hidden = false;
  $("modalConfirm").textContent = "Guardar";
  $("modalCancel").textContent = "Cancelar";
}

function nodeOptions(selectedId = "") {
  return data.nodes.map((n) => `<option value="${n.id}" ${n.id === selectedId ? "selected" : ""}>${"- ".repeat(n.level)}${n.name}</option>`).join("");
}

function directProductsInNode(nodeId) {
  return data.products.filter((p) => productNode(p) === nodeId);
}

function productsUnderNode(nodeId) {
  return data.products.filter((p) => isDescendantOrSelf(productNode(p), nodeId));
}

function subtreeNodeIds(nodeId) {
  const ids = [nodeId];
  childrenOf(nodeId).forEach((child) => ids.push(...subtreeNodeIds(child.id)));
  return ids;
}

function subtreeMaxLevel(nodeId) {
  return Math.max(...subtreeNodeIds(nodeId).map((id) => nodeById()[id].level));
}

function isValidOperationTarget(targetId) {
  const op = state.operation;
  const source = op.sourceNode ? nodeById()[op.sourceNode] : null;
  const target = targetId ? nodeById()[targetId] : null;
  if (!op.type || !source || !target || source.id === target.id) return false;
  if (op.type === "merge") return target.level === source.level;
  if (op.type === "move-node") {
    if (subtreeNodeIds(source.id).includes(target.id)) return false;
    const newLevel = target.level + 1;
    const delta = newLevel - source.level;
    if (Math.abs(delta) > 1) return false;
    if (subtreeMaxLevel(source.id) + delta > 3) return false;
    if (source.level + delta < 0) return false;
    return true;
  }
  return false;
}

function moveTargetHelp(source, target) {
  if (!source || !target) return "Elige en destino donde quedara el nodo.";
  if (!isValidOperationTarget(target.id)) return "Este destino no cumple las reglas para mover.";
  const newLevel = target.level + 1;
  if (newLevel === source.level) return "Movimiento lateral: cambia de contenedor manteniendo el nivel.";
  if (newLevel < source.level) return "Movimiento hacia arriba: sube un nivel.";
  return "Movimiento hacia abajo: baja un nivel.";
}

function currentSnapshot(label) {
  return {
    label,
    hierarchies: structuredClone(data.hierarchies),
    productLists: structuredClone(data.productLists),
    hierarchyListLinks: structuredClone(data.hierarchyListLinks || []),
    assistantDecisions: structuredClone(data.assistantDecisions || []),
    nodes: structuredClone(data.nodes),
    products: structuredClone(data.products),
    selectedNode: state.selectedNode,
    selectedProduct: state.selectedProduct,
    selectedProducts: [...state.selectedProducts],
    expandedNodes: [...state.expandedNodes],
    activeHierarchyId: state.activeHierarchyId,
    activeProductListId: state.activeProductListId,
    activePane: state.activePane,
    operation: {
      ...state.operation,
      targetExpandedNodes: [...state.operation.targetExpandedNodes]
    },
    changes: structuredClone(state.changes)
  };
}

function restoreSnapshot(snapshot) {
  if (snapshot.hierarchies) data.hierarchies.splice(0, data.hierarchies.length, ...snapshot.hierarchies);
  if (snapshot.productLists) data.productLists.splice(0, data.productLists.length, ...snapshot.productLists);
  if (snapshot.hierarchyListLinks) data.hierarchyListLinks.splice(0, data.hierarchyListLinks.length, ...snapshot.hierarchyListLinks);
  data.assistantDecisions = structuredClone(snapshot.assistantDecisions || data.assistantDecisions || []);
  data.nodes.splice(0, data.nodes.length, ...snapshot.nodes);
  data.products.splice(0, data.products.length, ...snapshot.products);
  state.selectedNode = snapshot.selectedNode;
  state.selectedProduct = snapshot.selectedProduct;
  state.selectedProducts = new Set(snapshot.selectedProducts);
  state.expandedNodes = new Set(snapshot.expandedNodes);
  state.activeHierarchyId = snapshot.activeHierarchyId || state.activeHierarchyId;
  state.activeProductListId = snapshot.activeProductListId || state.activeProductListId;
  state.activePane = snapshot.activePane || "source";
  if (snapshot.operation) {
    state.operation = {
      ...snapshot.operation,
      targetExpandedNodes: new Set(snapshot.operation.targetExpandedNodes || [])
    };
  }
  state.changes = snapshot.changes;
}

function pushHistory(label) {
  invalidateRenderCache();
  historyStack.push(currentSnapshot(label));
  redoStack.length = 0;
  if (historyStack.length > 40) historyStack.shift();
}

function recordHistoryForLoad(label, rowCount = 0) {
  const heavyCatalog = data.products.length > 2500 || data.nodes.length > 8000 || rowCount > 3000;
  if (heavyCatalog) {
    redoStack.length = 0;
    return;
  }
  pushHistory(label);
}

function undoLastChange() {
  const last = historyStack.pop();
  if (!last) return;
  redoStack.push(currentSnapshot("rehacer"));
  restoreSnapshot(last);
  invalidateRenderCache();
  markDataDirty();
  renderAll();
}

function redoLastChange() {
  const next = redoStack.pop();
  if (!next) return;
  historyStack.push(currentSnapshot("deshacer"));
  restoreSnapshot(next);
  invalidateRenderCache();
  markDataDirty();
  renderAll();
}

function setActionStates() {
  const undoBtn = $("undoBtn");
  const redoBtn = $("redoBtn");
  const addChildBtn = $("addChildBtn");
  const deleteHierarchyBtn = $("deleteHierarchyBtn");
  const deleteListBtn = $("deleteListBtn");
  const connectListBtn = $("connectListBtn");
  const disconnectCatalogListBtn = $("disconnectCatalogListBtn");
  const disconnectListFromHierarchyBtn = $("disconnectListFromHierarchyBtn");
  const loginBtn = $("firebaseLoginBtn");
  const saveFirebaseBtn = $("saveFirebaseBtn");
  const loadFirebaseBtn = $("loadFirebaseBtn");
  const versionFirebaseBtn = $("versionFirebaseBtn");
  const publishFirebaseBtn = $("publishFirebaseBtn");
  const addUserBtn = $("addUserBtn");
  const refreshUsersBtn = $("refreshUsersBtn");
  const suggestDestinationsBtn = $("suggestDestinationsBtn");
  const suggestNodeDestinationBtn = $("suggestNodeDestinationBtn");
  const isSpecialNode = state.selectedNode === UNCLASSIFIED_NODE_ID;
  const selected = state.selectedNode ? nodeById()[state.selectedNode] : null;
  if (undoBtn) {
    undoBtn.disabled = historyStack.length === 0;
    undoBtn.textContent = "↺";
    undoBtn.title = historyStack.length ? `Deshacer ultimo cambio (${historyStack.length})` : "Deshacer";
  }
  if (redoBtn) {
    redoBtn.disabled = redoStack.length === 0;
    redoBtn.textContent = "↻";
    redoBtn.title = redoStack.length ? `Rehacer cambio (${redoStack.length})` : "Rehacer";
  }
  if (addChildBtn) {
    addChildBtn.disabled = isSpecialNode;
    addChildBtn.textContent = "Crear nodo";
  }
  if (suggestDestinationsBtn) {
    suggestDestinationsBtn.disabled = !state.selectedProduct && state.selectedProducts.size === 0 && !state.selectedNode;
  }
  if (suggestNodeDestinationBtn) {
    suggestNodeDestinationBtn.disabled = !selected || isSpecialNode || countProducts(selected.id) === 0;
  }
  if (deleteHierarchyBtn) {
    deleteHierarchyBtn.disabled = data.hierarchies.length <= 1;
  }
  if (deleteListBtn) {
    deleteListBtn.disabled = data.productLists.length <= 1 || !activeProductList();
  }
  if (connectListBtn) {
    connectListBtn.disabled = !activeHierarchy() || !activeProductList() || productListCount(activeProductList().id) === 0;
  }
  if (disconnectCatalogListBtn) {
    disconnectCatalogListBtn.disabled = !activeHierarchyLinkedListIds().length || !$("catalogLinkedListSelect")?.value;
  }
  if (disconnectListFromHierarchyBtn) {
    disconnectListFromHierarchyBtn.disabled = !$("listConnectedHierarchySelect")?.value;
  }
  if (loginBtn) {
    const initial = $("userInitials");
    const label = firebaseUser ? (firebaseUser.email || firebaseUser.name || "Google") : LOCAL_TEST_MODE ? "Modo local" : "Entrar Google";
    loginBtn.title = firebaseUser ? `Salir (${label})` : LOCAL_TEST_MODE ? "Modo local de prueba" : "Entrar con Google";
    loginBtn.classList.toggle("signed-out", !firebaseUser && !LOCAL_TEST_MODE);
    if (initial) initial.textContent = firebaseUser ? label.slice(0, 1).toUpperCase() : LOCAL_TEST_MODE ? "L" : "?";
  }
  const gate = $("loginGate");
  if (gate) gate.hidden = !!firebaseUser || LOCAL_TEST_MODE;
  updateAutosaveStatus(firebaseDirty ? "saving" : "saved");
  [saveFirebaseBtn, loadFirebaseBtn, versionFirebaseBtn].forEach((btn) => {
    if (btn) btn.disabled = !firebaseReady || !firebaseUser;
  });
  if (publishFirebaseBtn) {
    publishFirebaseBtn.disabled = !firebaseReady || !firebaseUser || !canPublishDev();
    publishFirebaseBtn.title = canPublishDev() ? "Publicar vistas DEV" : "Requiere rol admin u owner";
  }
  if (addUserBtn) {
    addUserBtn.disabled = false;
    addUserBtn.title = canManageUsers() ? "Agregar usuario DEV" : "Ver requisito para agregar usuarios";
  }
  if (refreshUsersBtn) refreshUsersBtn.disabled = !firebaseReady || !firebaseUser;
}

function adminUserId(email) {
  return cellText(email).toLowerCase();
}

function roleAtLeast(role) {
  return (adminRoleRank[currentAdminRole] || 0) >= (adminRoleRank[role] || 0);
}

function canManageUsers() {
  return !!firebaseUser && roleAtLeast("owner");
}

function canPublishDev() {
  return roleAtLeast("admin");
}

function canEditCatalog() {
  return roleAtLeast("admin");
}

function currentAdminUser() {
  const email = adminUserId(firebaseUser?.email);
  return adminUsers.find((user) => adminUserId(user.email) === email || user.id === email);
}

function effectiveAdminRole(user) {
  if (!user?.active) return "none";
  if (isDevOwnerEmail(user.email || user.id)) return "owner";
  return "admin";
}

function updateCurrentAdminRole() {
  if (LOCAL_TEST_MODE && !firebaseUser) {
    currentAdminRole = "owner";
    return;
  }
  const user = currentAdminUser();
  currentAdminRole = effectiveAdminRole(user);
}

function adminUserSummary(user) {
  const updated = user.updatedAt || user.createdAt || "";
  return updated ? new Date(updated).toLocaleString("es-CL") : "Sin registro";
}

function renderUsersView() {
  const rows = $("usersRows");
  const permission = $("usersPermissionText");
  const activeCount = $("usersActiveCount");
  const adminCount = $("usersAdminCount");
  const addBtn = $("addUserBtn");
  if (activeCount) activeCount.textContent = adminUsers.filter((user) => user.active).length;
  if (adminCount) adminCount.textContent = adminUsers.filter((user) => user.active && ["owner", "admin"].includes(normalizeAdminRole(user.role))).length;
  if (permission) {
    const current = currentAdminUser();
    const effective = effectiveAdminRole(current);
    const roleNote = isDevOwnerEmail(current?.email || current?.id)
      ? " · Owner definido por configuracion DEV"
      : "";
    const diagnostic = firebaseUser
      ? `Sesion: ${adminUserId(firebaseUser.email)} · Doc: ${current?.id || "no encontrado"} · Rol efectivo: ${adminRoleLabels[effective] || "Sin acceso"}${roleNote} · Build: ${APP_BUILD}`
      : `Build: ${APP_BUILD}`;
    if (!firebaseUser) permission.textContent = LOCAL_TEST_MODE
      ? "La administracion de usuarios requiere entrar con Google desde el sitio publicado; no se guarda en modo local."
      : "Entra con Google para ver y administrar usuarios.";
    else if (!adminUsers.length && firebaseUser) permission.textContent = `No hay usuarios cargados. Crea manualmente el usuario DEV en ${ADMIN_USERS_COLLECTION}/${OWNER_EMAIL_DEV}.`;
    else permission.textContent = `Tu rol actual es ${adminRoleLabels[currentAdminRole] || "Sin acceso"}. ${canManageUsers() ? "Puedes administrar usuarios DEV." : "Puedes trabajar y publicar en el espacio compartido DEV."} ${diagnostic}`;
  }
  if (addBtn) {
    addBtn.disabled = false;
    addBtn.title = canManageUsers() ? "Agregar usuario DEV" : "Ver requisito para agregar usuarios";
  }
  if (!rows) return;
  if (!firebaseUser && !LOCAL_TEST_MODE) {
    rows.innerHTML = `<tr><td colspan="5"><div class="empty-state"><h3>Sesion requerida</h3><p>Entra con Google para cargar usuarios DEV.</p></div></td></tr>`;
    return;
  }
  if (!adminUsers.length) {
    rows.innerHTML = `<tr><td colspan="5"><div class="empty-state"><h3>Sin usuarios</h3><p>Crea el primer owner manualmente en Firebase y vuelve a actualizar.</p></div></td></tr>`;
    return;
  }
  rows.innerHTML = adminUsers
    .slice()
    .sort((a, b) => compareValues(a.email, b.email, "asc"))
    .map((user) => {
      const disabled = canManageUsers() ? "" : "disabled";
      const active = user.active !== false;
      const role = effectiveAdminRole(user);
      return `
        <tr>
          <td>
            <div class="product-name">${escapeHtml(user.name || user.email)}</div>
            <div class="product-meta">${escapeHtml(user.email)}</div>
          </td>
          <td><span class="role-pill role-${escapeHtml(role)}">${adminRoleLabels[role] || "Administrador"}</span></td>
          <td><span class="badge ${active ? "validated" : "pending"}">${active ? "Activo" : "Inactivo"}</span></td>
          <td>${escapeHtml(adminUserSummary(user))}</td>
          <td class="row-actions">
            <button class="ghost-btn" data-user-edit="${escapeHtml(user.email)}" ${disabled}>Editar</button>
            <button class="ghost-btn danger-action" data-user-toggle="${escapeHtml(user.email)}" ${disabled}>${active ? "Desactivar" : "Activar"}</button>
          </td>
        </tr>
      `;
    }).join("");
}

async function loadAdminUsers() {
  if (!firebaseAvailable() || !firebaseUser) {
    adminUsers = [];
    updateCurrentAdminRole();
    renderUsersView();
    setActionStates();
    return;
  }
  try {
    const snap = await window.firebaseGetDocs(window.firebaseCollection(window.firebaseDb, ADMIN_USERS_COLLECTION));
    adminUsers = snap.docs.map((docSnap) => {
      const user = { id: docSnap.id, ...docSnap.data() };
      return { ...user, email: adminUserId(user.email || docSnap.id), role: normalizeAdminRole(user.role) };
    });
    updateCurrentAdminRole();
  } catch (error) {
    adminUsers = [];
    currentAdminRole = "none";
    console.warn("No se pudieron cargar usuarios admin", error);
    if (state.activeView === "users") {
      openModal("Usuarios DEV", `<div class="load-error"><strong>No se pudieron cargar usuarios</strong><span>${error.message}</span></div>`, () => {}, { confirmText: "Aceptar", hideCancel: true });
    }
  }
  renderUsersView();
  setActionStates();
}

async function saveAdminUser(user) {
  requireFirebaseSession();
  if (!canManageUsers()) throw new Error("Solo un owner puede administrar usuarios.");
  const id = adminUserId(user.email);
  if (!id || !id.includes("@")) throw new Error("Ingresa un email valido.");
  const existing = adminUsers.find((item) => adminUserId(item.email) === id);
  const now = new Date().toISOString();
  const payload = {
    email: id,
    name: cellText(user.name) || id,
    role: isDevOwnerEmail(id) ? "owner" : "admin",
    active: user.active !== false,
    createdAt: existing?.createdAt || now,
    createdBy: existing?.createdBy || firebaseUserLabel(),
    updatedAt: now,
    updatedBy: firebaseUserLabel()
  };
  await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, ADMIN_USERS_COLLECTION, id), payload);
  await loadAdminUsers();
  addChange("Usuario actualizado", `${id} quedo como ${adminRoleLabels[payload.role]}.`);
}

function openUserModal(email = "") {
  if (!canManageUsers()) {
    const emailId = adminUserId(firebaseUser?.email);
    const detail = !firebaseUser
      ? "Debes entrar con Google desde la app publicada para administrar usuarios."
      : !adminUsers.length
        ? `Primero crea manualmente tu usuario owner en Firebase: ${ADMIN_USERS_COLLECTION}/${OWNER_EMAIL_DEV}.`
        : `Tu rol actual es ${adminRoleLabels[currentAdminRole] || "Sin acceso"}. Solo un Owner puede administrar usuarios.`;
    openModal("Usuarios DEV", `<div class="load-error"><strong>No puedes agregar usuarios todavia</strong><span>${escapeHtml(detail)}</span></div>`, () => {}, { confirmText: "Aceptar", hideCancel: true });
    return;
  }
  const existing = adminUsers.find((user) => adminUserId(user.email) === adminUserId(email));
  const existingRole = effectiveAdminRole(existing);
  const modalEmail = adminUserId(existing?.email || email);
  const roleOptions = isDevOwnerEmail(modalEmail)
    ? `<option value="owner" selected>Owner</option>`
    : `<option value="admin" selected>Administrador</option>`;
  const body = `
    <div class="form-grid">
      <label>Email
        <input id="adminUserEmail" type="email" value="${escapeHtml(existing?.email || "")}" ${existing ? "disabled" : ""} placeholder="usuario@empresa.cl">
      </label>
      <label>Nombre
        <input id="adminUserName" value="${escapeHtml(existing?.name || "")}" placeholder="Nombre visible">
      </label>
      <label>Rol
        <select id="adminUserRole">
          ${roleOptions}
        </select>
      </label>
      <label class="checkline">
        <input id="adminUserActive" type="checkbox" ${existing?.active === false ? "" : "checked"}>
        Usuario activo
      </label>
    </div>
    <div class="load-hint">Owner fijo DEV: ${OWNER_EMAIL_DEV}. Los demas usuarios activos son administradores.</div>
  `;
  openModal(existing ? "Editar usuario" : "Agregar usuario", body, async () => {
    const payload = {
      email: existing?.email || $("adminUserEmail").value,
      name: $("adminUserName").value,
      role: $("adminUserRole").value,
      active: $("adminUserActive").checked
    };
    await saveAdminUser(payload);
  }, { confirmText: "Guardar usuario" });
}

async function toggleAdminUser(email) {
  const existing = adminUsers.find((user) => adminUserId(user.email) === adminUserId(email));
  if (!existing) return;
  if (isDevOwnerEmail(existing.email) && existing.active !== false) {
    openModal("Desactivar owner", `<div class="load-error"><strong>No se puede desactivar el owner DEV</strong><span>${OWNER_EMAIL_DEV} es el owner fijo de esta app.</span></div>`, () => {}, { confirmText: "Aceptar", hideCancel: true });
    return;
  }
  await saveAdminUser({ ...existing, active: existing.active === false });
}

function removeNode(nodeId) {
  const index = data.nodes.findIndex((n) => n.id === nodeId);
  if (index >= 0) data.nodes.splice(index, 1);
}

function emptyNodeReason(nodeId) {
  const childCount = childrenOf(nodeId).length;
  const productCount = directProductsInNode(nodeId).length;
  if (!childCount && !productCount) return "";
  const parts = [];
  if (childCount) parts.push(`${childCount} subnivel(es)`);
  if (productCount) parts.push(`${productCount} producto(s) directo(s)`);
  return parts.join(" y ");
}

function renderMoveBrowser() {
  const treeEl = $("moveTreeList");
  const previewEl = $("movePreviewList");
  const targetEl = $("moveTargetSummary");
  if (!treeEl || !previewEl || !targetEl) return;

  const visible = [];
  const walk = (node) => {
    visible.push(node);
    if (moveState.expandedNodes.has(node.id)) childrenOf(node.id).forEach(walk);
  };
  childrenOf(null).forEach(walk);

  treeEl.innerHTML = visible.map((node) => {
    const hasChildren = childrenOf(node.id).length > 0;
    const allowed = !moveState.allowedTarget || moveState.allowedTarget(node);
    const active = moveState.targetNode === node.id ? " active" : "";
    const disabled = allowed ? "" : " disabled";
    const twisty = hasChildren ? (moveState.expandedNodes.has(node.id) ? "v" : ">") : "";
    return `
      <button class="move-node${active}${disabled}" style="padding-left:${8 + node.level * 18}px" data-move-node="${node.id}" ${allowed ? "" : "disabled"}>
        <span class="twisty" data-move-toggle="${node.id}">${twisty}</span>
        <span class="name">${node.name}</span>
        <span class="count">${countProducts(node.id)}</span>
      </button>
    `;
  }).join("");

  const target = nodeById()[moveState.targetNode];
  targetEl.textContent = target ? pathFor(target.id).map((n) => n.name).join(" / ") : "Selecciona un destino";

  if (!target) {
    previewEl.innerHTML = `
      <div class="empty-state">
        <h3>Elige un destino</h3>
        <p>Al seleccionarlo veras que nodos y productos contiene.</p>
      </div>
    `;
    return;
  }

  const childNodes = childrenOf(target.id);
  const direct = directProductsInNode(target.id);
  const under = productsUnderNode(target.id).slice(0, 12);
  const nodeRows = childNodes.map((node) => `
    <div class="move-product">
      <strong>${levelNames[node.level]}: ${node.name}</strong>
      <span>${countProducts(node.id)} producto(s) dentro</span>
    </div>
  `);
  const productRows = (direct.length ? direct : under).map((p) => `
    <div class="move-product">
      <strong>${p.name}</strong>
      <span>${p.id} - ${statusLabels[p.status]}</span>
    </div>
  `);
  previewEl.innerHTML = nodeRows.length || productRows.length ? [...nodeRows, ...productRows].join("") : `
    <div class="empty-state">
      <h3>Destino vacio</h3>
      <p>No contiene subniveles ni productos directos.</p>
    </div>
  `;
}
function addChange(title, detail) {
  state.changes.unshift({ title, detail });
  showToast(title, detail);
  markDataDirty();
}

function showToast(title, detail = "") {
  const stack = $("toastStack");
  if (!stack) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<strong>${title}</strong><span>${detail}</span>`;
  stack.prepend(toast);
  window.setTimeout(() => toast.classList.add("leaving"), 4200);
  window.setTimeout(() => toast.remove(), 4800);
}

function closeHierarchyActions() {
  $("hierarchyActionsMenu")?.classList.remove("open");
}

function toggleHierarchyActions() {
  const button = $("hierarchyActionsBtn");
  const menu = $("hierarchyActionsMenu");
  if (!button || !menu) return;
  const isOpen = menu.classList.contains("open");
  if (isOpen) {
    closeHierarchyActions();
    return;
  }
  const rect = button.getBoundingClientRect();
  const menuWidth = 220;
  const gap = 10;
  const left = Math.min(rect.right + gap, window.innerWidth - menuWidth - 12);
  const top = Math.min(rect.top + 16, window.innerHeight - 330);
  menu.style.left = `${Math.max(12, left)}px`;
  menu.style.top = `${Math.max(12, top)}px`;
  menu.classList.add("open");
}

function createNode(parentId, forcedLevel = null) {
  if (parentId === UNCLASSIFIED_NODE_ID) return;
  const parent = parentId ? nodeById()[parentId] : null;
  if (parent && parent.level >= 3) {
    openModal("No se puede crear dentro", `
      <div class="empty-state">
        <h3>Este nivel ya contiene productos</h3>
        <p>Una Familia es el ultimo nivel de la jerarquia. Para crear algo paralelo, selecciona su contenedor superior.</p>
      </div>
    `, () => {}, { confirmText: "Aceptar", hideCancel: true });
    return;
  }
  const nextLevel = forcedLevel ?? (parent ? parent.level + 1 : 0);
  openModal(parent ? `Crear ${levelNames[nextLevel]} dentro` : "Crear Linea", `
    <div class="form-row">
      <label>Nivel</label>
      <input value="${levelNames[nextLevel]}" disabled>
    </div>
    <div class="form-row">
      <label>Nombre</label>
      <input id="nodeNameInput" placeholder="Nombre del nuevo elemento">
    </div>
  `, () => {
    const name = $("nodeNameInput").value.trim();
    if (!name) return;
    pushHistory("crear nodo");
    const id = `n-${Date.now()}`;
    data.nodes.push({ id, parent: parentId, level: nextLevel, name, hierarchyId: state.activeHierarchyId, order: nextNodeOrder(state.activeHierarchyId, parentId) });
    state.selectedNode = id;
    if (parentId) state.expandedNodes.add(parentId);
    addChange("Nuevo nodo", `${levelNames[nextLevel]} "${name}" creado en "${activeHierarchy().name}".`);
  });
}

function openCreateNodeDialog() {
  const selected = state.selectedNode && state.selectedNode !== UNCLASSIFIED_NODE_ID ? nodeById()[state.selectedNode] : null;
  const options = [];
  if (!selected) {
    options.push({ value: "root", label: "Crear linea nueva", level: 0, parentId: null });
  } else {
    if (selected.level < 3) {
      options.push({ value: "child", label: `Crear subnodo dentro de "${selected.name}"`, level: selected.level + 1, parentId: selected.id });
    }
    options.push({ value: "sibling", label: `Crear nodo del mismo nivel que "${selected.name}"`, level: selected.level, parentId: selected.parent || null });
  }
  const optionsHtml = options.map((option, index) => `
    <label class="choice-row">
      <input type="radio" name="createNodeMode" value="${option.value}" ${index === 0 ? "checked" : ""}>
      <span>${option.label}</span>
    </label>
  `).join("");
  openModal("Crear nodo", `
    <div class="choice-list">${optionsHtml}</div>
    <div class="form-row">
      <label>Nombre</label>
      <input id="nodeNameInput" placeholder="Nombre del nuevo nodo">
    </div>
  `, () => {
    const mode = document.querySelector("input[name='createNodeMode']:checked")?.value || options[0]?.value;
    const selectedOption = options.find((option) => option.value === mode) || options[0];
    const name = $("nodeNameInput").value.trim();
    if (!name || !selectedOption) return;
    pushHistory("crear nodo");
    const id = `n-${Date.now()}`;
    data.nodes.push({
      id,
      parent: selectedOption.parentId,
      level: selectedOption.level,
      name,
      hierarchyId: state.activeHierarchyId,
      order: nextNodeOrder(state.activeHierarchyId, selectedOption.parentId)
    });
    state.selectedNode = id;
    if (selectedOption.parentId) state.expandedNodes.add(selectedOption.parentId);
    addChange("Nuevo nodo", `${levelNames[selectedOption.level]} "${name}" creado en "${activeHierarchy().name}".`);
  });
}

function renameNode() {
  if (!state.selectedNode || state.selectedNode === UNCLASSIFIED_NODE_ID) return;
  const node = nodeById()[state.selectedNode];
  openModal("Renombrar elemento", `
    <div class="form-row">
      <label>Nombre actual</label>
      <input value="${node.name}" disabled>
    </div>
    <div class="form-row">
      <label>Nuevo nombre</label>
      <input id="renameInput" value="${node.name}">
    </div>
  `, () => {
    const old = node.name;
    const name = $("renameInput").value.trim();
    if (!name) return;
    pushHistory("renombrar nodo");
    node.name = name;
    addChange("Renombre", `"${old}" ahora se llama "${name}".`);
  });
}

function mergeNode() {
  if (!state.selectedNode || state.selectedNode === UNCLASSIFIED_NODE_ID) return;
  startOperation("merge");
}

function moveSelectedNode() {
  if (!state.selectedNode || state.selectedNode === UNCLASSIFIED_NODE_ID) return;
  startOperation("move-node");
}

function startOperation(type) {
  if (state.selectedNode === UNCLASSIFIED_NODE_ID) return;
  const source = nodeById()[state.selectedNode];
  if (!source) return;
  state.operation = {
    type,
    sourceNode: source.id,
    targetNode: null,
    targetSearch: "",
    targetExpandedNodes: new Set([...state.expandedNodes, ...pathFor(source.id).map((n) => n.id)]),
    mergeName: "",
    mergeLocation: "source"
  };
  state.activePane = "source";
  state.selectedProducts.clear();
  renderAll();
}

function cancelOperation() {
  state.operation = {
    type: null,
    sourceNode: null,
    targetNode: null,
    targetSearch: "",
    targetExpandedNodes: new Set(),
    mergeName: "",
    mergeLocation: "source"
  };
  state.activePane = "source";
  renderAll();
}

function confirmOperation() {
  if (state.operation.type === "merge") mergeOperationNodes();
  if (state.operation.type === "move-node") moveOperationNode();
}

function mergeOperationNodes() {
  const op = state.operation;
  const map = nodeById();
  const source = map[op.sourceNode];
  const target = map[op.targetNode];
  if (!source || !target || !isValidOperationTarget(target.id)) return;
  const name = (op.mergeName || `${source.name} y ${target.name}`).trim();
  if (!name) return;
  const parent = op.mergeLocation === "target" ? target.parent : source.parent;
  const newId = `n-${Date.now()}`;

  pushHistory("fusionar nodos");
  data.nodes.push({ id: newId, parent, level: source.level, name, hierarchyId: state.activeHierarchyId, order: nextNodeOrder(state.activeHierarchyId, parent) });
  data.products.forEach((p) => {
    if (p.node === source.id || p.node === target.id) {
      p.node = newId;
      p.status = "corrected";
    }
  });
  childrenOf(source.id).forEach((child) => { child.parent = newId; });
  childrenOf(target.id).forEach((child) => { child.parent = newId; });
  removeNode(source.id);
  removeNode(target.id);
  state.selectedNode = newId;
  if (parent) state.expandedNodes.add(parent);
  state.expandedNodes.add(newId);
  addChange("Fusion de nodos", `"${source.name}" y "${target.name}" crearon "${name}".`);
  cancelOperation();
}

function moveOperationNode() {
  const op = state.operation;
  const map = nodeById();
  const source = map[op.sourceNode];
  const target = map[op.targetNode];
  if (!source || !target || !isValidOperationTarget(target.id)) return;
  const newLevel = target.level + 1;
  const delta = newLevel - source.level;

  pushHistory("mover nodo");
  subtreeNodeIds(source.id).forEach((id) => {
    map[id].level += delta;
  });
  source.parent = target.id;
  source.order = nextNodeOrder(state.activeHierarchyId, target.id, source.id);
  state.selectedNode = source.id;
  state.expandedNodes.add(target.id);
  addChange("Nodo movido", `"${source.name}" ahora queda dentro de "${target.name}".`);
  cancelOperation();
}

function deleteEmptyNode() {
  if (!state.selectedNode || state.selectedNode === UNCLASSIFIED_NODE_ID) return;
  const node = nodeById()[state.selectedNode];
  const reason = emptyNodeReason(node.id);
  if (reason) {
    openModal("No se puede eliminar", `
      <div class="empty-state">
        <h3>Este nodo no esta vacio</h3>
        <p>Contiene ${reason}. Primero mueve o fusiona ese contenido.</p>
      </div>
    `, () => {}, { confirmText: "Aceptar", hideCancel: true });
    return;
  }
  openModal("Eliminar nodo vacio", `
    <div class="form-row">
      <label>Nodo</label>
      <input value="${node.name}" disabled>
    </div>
    <div class="rule-note">
      Esta accion elimina solo el nodo vacio. Puedes deshacerla despues.
    </div>
  `, () => {
    pushHistory("eliminar nodo");
    removeNode(node.id);
    state.selectedNode = node.parent;
    addChange("Nodo eliminado", `"${node.name}" fue eliminado porque estaba vacio.`);
  });
}

function optionsFrom(items, selected = "") {
  return items.map((item) => `<option value="${item.id}" ${item.id === selected ? "selected" : ""}>${item.name}</option>`).join("");
}

function renderLoadConfig(type) {
  pendingHierarchyLoad = null;
  pendingProductLoad = null;
  selectedLoadType = type;
  const config = $("loadConfig");
  if (!config) return;
  const hierarchyOptions = optionsFrom(data.hierarchies, state.activeHierarchyId);
  const listOptions = optionsFrom(data.productLists, state.activeProductListId || "base");
  const sharedPreview = `
    <div class="load-next-step">
      <strong>Siguiente paso</strong>
      <span>Selecciona el archivo y presiona Preparar carga. La app leera las columnas, mostrara una vista previa y no guardara cambios hasta que confirmes el mapeo.</span>
    </div>
  `;
  if (type === "hierarchy") {
    config.innerHTML = `
      <div class="load-flow">
        <span class="active">1. Tipo de carga</span>
        <span>2. Leer archivo</span>
        <span>3. Mapear columnas</span>
        <span>4. Cargar</span>
      </div>
      <div class="rule-note">Carga una jerarquia. Puede venir sola o con codigos de producto ubicados en cada ruta. Esta carga solo toca la jerarquia elegida.</div>
      <div class="load-settings">
        <div class="form-row">
          <label>1. Que trae el archivo</label>
          <select id="hierarchyLoadShape">
            <option value="withProducts">Jerarquia con productos</option>
            <option value="only">Jerarquia sola</option>
          </select>
        </div>
        <div class="form-row">
          <label>2. Que quieres hacer</label>
          <select id="hierarchyUnifiedAction">
            <option value="new">Crear nueva jerarquia</option>
            <option value="complement">Complementar jerarquia existente</option>
            <option value="replace">Reemplazar jerarquia existente</option>
          </select>
        </div>
        <div class="form-row" data-visible-when="hierarchyUnifiedAction:new">
          <label>3. Nombre nueva jerarquia</label>
          <input id="hierarchyUnifiedName" placeholder="Ej: Jerarquia comercial 2026">
        </div>
        <div class="form-row" data-visible-when="hierarchyUnifiedAction:complement,replace">
          <label>3. Jerarquia existente</label>
          <select id="hierarchyUnifiedTarget">${hierarchyOptions}</select>
        </div>
        <div class="form-row">
          <label>4. Archivo Excel, CSV o TSV</label>
          <input id="loadFile" type="file" accept=".xlsx,.xls,.csv,.tsv,.txt">
        </div>
      </div>
      <div class="rule-note" id="hierarchyProductHelp">La jerarquia sola no toca productos. Si eliges jerarquia con productos, los codigos se ubican solo en esa jerarquia.</div>
      <div class="rule-note" id="productCodePolicy">Los codigos no se duplican: si un producto ya existe, solo se agrega su ubicacion en esta jerarquia.</div>
      ${sharedPreview}
    `;
    syncLoadActionFields();
    return;
  }
  if (type === "products") {
    config.innerHTML = `
      <div class="load-flow">
        <span class="active">1. Tipo de carga</span>
        <span>2. Leer archivo</span>
        <span>3. Mapear columnas</span>
        <span>4. Cargar lista</span>
      </div>
      <div class="rule-note">Carga productos como lista. No los asigna automaticamente a ninguna jerarquia ni cambia ubicaciones existentes.</div>
      <div class="load-settings">
        <div class="form-row">
          <label>1. Que trae el archivo</label>
          <select id="productTableShape">
            <option value="attributes">Tabla con atributos</option>
            <option value="simple">Tabla simple</option>
          </select>
        </div>
        <div class="form-row">
          <label>2. Que quieres hacer</label>
          <select id="productListAction"><option value="new">Crear lista nueva</option><option value="complement">Complementar lista existente</option><option value="replace">Reemplazar lista existente</option></select>
        </div>
        <div class="form-row" data-visible-when="productListAction:new">
          <label>3. Nombre lista nueva</label>
          <input id="newProductListName" placeholder="Ej: Productos precios y costos">
        </div>
        <div class="form-row" data-visible-when="productListAction:complement,replace">
          <label>3. Lista existente</label>
          <select id="loadProductList">${listOptions}</select>
        </div>
        <div class="form-row">
          <label>4. Archivo Excel, CSV o TSV</label>
          <input id="productLoadFile" type="file" accept=".xlsx,.xls,.csv,.tsv,.txt">
        </div>
      </div>
      ${sharedPreview}
    `;
    syncLoadActionFields();
    return;
  }
  if (type === "hierarchyOnly") {
    config.innerHTML = `
      <div class="rule-note">La carga espera columnas de jerarquia. No busca productos ni codigos.</div>
      <div class="form-row">
        <label>Accion</label>
        <select id="loadMode"><option value="new">Crear nueva jerarquia</option><option value="update">Complementar jerarquia existente</option><option value="replace">Reemplazar jerarquia existente</option></select>
      </div>
      <div class="form-row" data-visible-when="loadMode:update,replace">
        <label>Jerarquia existente</label>
        <select id="loadTargetHierarchy">${hierarchyOptions}</select>
      </div>
      <div class="form-row" data-visible-when="loadMode:new">
        <label>Nombre de la nueva jerarquia</label>
        <input id="loadName" placeholder="Ej: Jerarquia comercial 2026">
      </div>
      <div class="form-row">
        <label>Archivo Excel, CSV o TSV</label>
        <input id="loadFile" type="file" accept=".xlsx,.xls,.csv,.tsv,.txt">
      </div>
      ${sharedPreview}
    `;
    syncLoadActionFields();
    return;
  }
  if (type === "hierarchyProducts") {
    config.innerHTML = `
      <div class="rule-note" id="hierarchyProductHelp">Crea una jerarquia nueva desde el archivo y asigna los productos a la ruta mas profunda disponible.</div>
      <div class="load-settings">
        <div class="form-row">
          <label>Que quieres hacer</label>
          <select id="hierarchyProductAction"><option value="new">Crear jerarquia nueva</option><option value="complement">Complementar jerarquia existente</option><option value="replace">Reemplazar jerarquia existente</option></select>
        </div>
        <div class="form-row" data-visible-when="hierarchyProductAction:new">
          <label>Nombre jerarquia nueva</label>
          <input id="newHierarchyProductName" placeholder="Ej: Maestro productos mayo 2026">
        </div>
        <div class="form-row" data-visible-when="hierarchyProductAction:complement,replace">
          <label>Jerarquia existente</label>
          <select id="loadHierarchy">${hierarchyOptions}</select>
        </div>
        <div class="form-row">
          <label>Archivo Excel, CSV o TSV</label>
          <input id="loadFile" type="file" accept=".xlsx,.xls,.csv,.tsv,.txt">
        </div>
      </div>
      <div class="rule-note" id="productCodePolicy">Los codigos de producto no se duplican en la base: si un codigo ya existe, se reutiliza su ficha y se agrega esta nueva ubicacion.</div>
      ${sharedPreview}
    `;
    syncLoadActionFields();
    return;
  }
  if (type === "enrichProducts") {
    config.innerHTML = `
      <div class="rule-note">Carga una lista de productos con codigo, descripcion y atributos. Puedes crear una lista nueva, complementar una existente o reemplazar una existente.</div>
      <div class="load-settings">
        <div class="form-row">
          <label>Que quieres hacer</label>
          <select id="productListAction"><option value="new">Crear lista nueva</option><option value="complement">Complementar lista existente</option><option value="replace">Reemplazar lista existente</option></select>
        </div>
        <div class="form-row" data-visible-when="productListAction:complement,replace">
          <label>Lista existente</label>
          <select id="loadProductList">${listOptions}</select>
        </div>
        <div class="form-row" data-visible-when="productListAction:new">
          <label>Nombre lista nueva</label>
          <input id="newProductListName" placeholder="Ej: Maestro mayo 2026">
        </div>
        <div class="form-row">
          <label>Archivo Excel, CSV o TSV</label>
          <input id="productLoadFile" type="file" accept=".xlsx,.xls,.csv,.tsv,.txt">
        </div>
      </div>
      ${sharedPreview}
    `;
    syncLoadActionFields();
    return;
  }
  config.innerHTML = `
    <div class="rule-note">La carga puede venir con todo el maestro, pero la app compara codigos y agrega solo los nuevos. Los existentes quedan intactos y se informa el resumen.</div>
    <div class="form-row">
      <label>Lista donde se agregaran los nuevos</label>
      <select id="loadLinkedList">${listOptions}</select>
    </div>
    <div class="form-row">
      <label>Archivo Excel, CSV o TSV</label>
      <input id="productLoadFile" type="file" accept=".xlsx,.xls,.csv,.tsv,.txt">
    </div>
    <div class="rule-note">En esta carga solo se incorporan codigos nuevos. Los codigos que ya existan quedan registrados como omitidos para evitar duplicados.</div>
    ${sharedPreview}
  `;
}

function syncLoadActionFields() {
  document.querySelectorAll("[data-visible-when]").forEach((block) => {
    const [controlId, valuesText] = block.dataset.visibleWhen.split(":");
    const control = $(controlId);
    const values = valuesText.split(",");
    const show = control && values.includes(control.value);
    block.hidden = !show;
    block.querySelectorAll("input, select, textarea").forEach((field) => {
      field.disabled = !show;
    });
  });
  const hierarchyShape = $("hierarchyLoadShape")?.value;
  const hierarchyAction = $("hierarchyUnifiedAction")?.value || $("hierarchyProductAction")?.value;
  const help = $("hierarchyProductHelp");
  const productPolicy = $("productCodePolicy");
  if (help) {
    if (hierarchyShape === "only") {
      help.textContent = "La jerarquia sola crea, complementa o reemplaza estructura. No toca productos ni listas.";
    } else if (hierarchyAction) {
      help.textContent = {
        new: "Crea una jerarquia nueva desde el archivo y asigna los productos a la ruta mas profunda disponible.",
        complement: "Agrega a la jerarquia existente solo los nodos, rutas o asignaciones que no existan.",
        replace: "Borra la estructura de la jerarquia elegida y la reconstruye con el archivo antes de asignar productos."
      }[hierarchyAction];
    }
  }
  if (productPolicy && hierarchyAction) {
    productPolicy.hidden = hierarchyShape !== "withProducts";
  }
}

function openLoadModal(selectedType = "hierarchy") {
  selectedLoadType = selectedType;
  loadDebug.length = 0;
  logLoad("modal", `Apertura de carga ${selectedType}`);
  const isHierarchy = selectedType === "hierarchy";
  openModal(isHierarchy ? "Cargar jerarquia" : "Cargar lista de productos", `
    <div class="rule-note">${isHierarchy
      ? "Asistente para crear, reemplazar o complementar una jerarquia. Solo veras las decisiones necesarias para esta carga."
      : "Asistente para crear, reemplazar o complementar una lista de productos. La lista puede conectarse a jerarquias despues de cargar."} <strong>Build ${APP_BUILD}</strong></div>
    <div class="load-maintenance">
      <button class="ghost-btn" data-clear-local-state>Limpiar datos locales</button>
      <button class="ghost-btn" data-copy-load-debug>Copiar debug</button>
      <span>Usalo si una carga anterior dejo la app lenta o pegada. Borra solo el estado guardado en este navegador.</span>
    </div>
    <div class="load-config" id="loadConfig"></div>
    <details class="load-debug-box">
      <summary>Diagnostico tecnico de esta carga</summary>
      <div id="loadDebug" class="load-debug"></div>
    </details>
  `, () => {
    return runLoadStep(prepareLoad);
  }, { confirmText: "Leer archivo", keepOpen: true });
  renderLoadConfig(selectedType);
}

async function prepareLoad() {
  if (!pendingHierarchyLoad && !pendingProductLoad && $("modalConfirm")?.textContent === "Nueva carga") {
    openLoadModal(selectedLoadType || "hierarchy");
    return;
  }
  updateProcessingStatus("Preparando decision de carga...");
  if (pendingHierarchyLoad) {
    const shape = pendingHierarchyLoad.loadOptions?.shape || ($("productCodeCol") ? "withProducts" : "only");
    logLoad("prepareLoad pendiente", { pending: "hierarchy", shape, hasProductCodeCol: !!$("productCodeCol") });
    if (shape === "withProducts") applyMappedHierarchyProductsLoad();
    else applyMappedHierarchyLoad();
    return;
  }
  if (pendingProductLoad) {
    logLoad("prepareLoad pendiente", { pending: "products" });
    applyMappedProductLoad(pendingProductLoad.type || "products");
    return;
  }
  const type = selectedLoadType || "hierarchy";
  logLoad("prepareLoad", {
    type,
    hierarchyLoadShape: $("hierarchyLoadShape")?.value || null,
    hierarchyAction: $("hierarchyUnifiedAction")?.value || null,
    productTableShape: $("productTableShape")?.value || null,
    productAction: $("productListAction")?.value || null
  });
  if (type === "hierarchy") {
    if (($("hierarchyLoadShape")?.value || "only") === "withProducts") await loadHierarchyProductsFromFile();
    else await loadHierarchyFromFile();
    return;
  }
  if (type === "products") {
    await loadProductsFromFile("products");
    return;
  }
  if (type === "hierarchyOnly") {
    await loadHierarchyFromFile();
    return;
  }
  if (type === "hierarchyProducts") {
    await loadHierarchyProductsFromFile();
    return;
  }
  if (type === "enrichProducts" || type === "newProductsLinked") {
    await loadProductsFromFile(type);
    return;
  }
  const config = $("loadConfig");
  const item = loadTypes[type];
  const resultText = {
    hierarchyOnly: "Se revisara una estructura de jerarquia. Si esta correcta, se creara o actualizara una jerarquia editable sin tocar productos.",
    hierarchyProducts: "Se revisara la jerarquia y los codigos asignados. Los productos existentes no se reemplazan; se agrega una nueva ubicacion en esa jerarquia.",
    enrichProducts: "Se revisaran atributos contra la lista base. Las diferencias de nombre o datos quedaran como advertencias antes de aplicar.",
    newProductsLinked: "Se compararan codigos contra la lista elegida. Solo se agregaran codigos nuevos; los existentes quedaran registrados como omitidos o enriquecibles."
  }[type];
  if (config) {
    config.innerHTML = `
      <div class="load-result">
        <strong>${item.title}</strong><br>
        ${resultText}
      </div>
      <div class="load-preview">
        <div class="load-pill"><strong>14</strong> filas simuladas</div>
        <div class="load-pill"><strong>3</strong> advertencias posibles</div>
        <div class="load-pill"><strong>0</strong> cambios guardados</div>
      </div>
    `;
  }
  $("modalConfirm").textContent = "Volver a preparar";
  addChange("Carga preparada", `${item.title}: lista para seleccionar archivo, previsualizar cambios y resolver advertencias.`);
  renderChanges();
}

function clearLocalCatalogState() {
  clearTimeout(saveTimer);
  dataDirty = false;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("No se pudo limpiar localStorage", error);
  }
  if ("indexedDB" in window) {
    const request = indexedDB.deleteDatabase(DB_NAME);
    request.onerror = () => console.warn("No se pudo limpiar IndexedDB", request.error);
  }
  logLoad("limpieza", "Datos locales solicitados para limpiar");
  const body = $("loadConfig") || $("modalBody");
  if (body) {
    body.insertAdjacentHTML("afterbegin", `
      <div class="load-result">
        <strong>Datos locales limpiados</strong><br>
        Refresca la app. Volvera a abrir con la base inicial del archivo y sin cargas guardadas en este navegador.
      </div>
    `);
  }
}

function parseDelimited(text) {
  const delimiter = text.includes("\t") ? "\t" : ";";
  const fallbackDelimiter = ",";
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  const activeDelimiter = text.split("\n")[0].includes(delimiter) ? delimiter : fallbackDelimiter;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === activeDelimiter && !quoted) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

function parseHtmlTable(text) {
  const doc = new DOMParser().parseFromString(text, "text/html");
  const table = doc.querySelector("table");
  if (!table) return [];
  return [...table.querySelectorAll("tr")]
    .map((tr) => [...tr.querySelectorAll("th,td")].map((cell) => cell.textContent.trim()))
    .filter((row) => row.some(Boolean));
}

function parseExcelXml(text) {
  const doc = xmlDoc(text);
  const rowEls = [...doc.getElementsByTagName("Row")];
  if (!rowEls.length) return [];
  return rowEls.map((rowEl) => {
    const row = [];
    [...rowEl.getElementsByTagName("Cell")].forEach((cell) => {
      const indexAttr = cell.getAttribute("ss:Index") || cell.getAttribute("Index");
      const targetIndex = indexAttr ? Number(indexAttr) - 1 : row.length;
      const dataEl = cell.getElementsByTagName("Data")[0];
      row[targetIndex] = dataEl ? dataEl.textContent.trim() : "";
    });
    return row;
  }).filter((row) => row.some(Boolean));
}

function decodeWorkbookText(buffer) {
  const bytes = new Uint8Array(buffer);
  if (bytes[0] === 0xff && bytes[1] === 0xfe) return new TextDecoder("utf-16le").decode(buffer);
  if (bytes[0] === 0xfe && bytes[1] === 0xff) return new TextDecoder("utf-16be").decode(buffer);
  const sampleLength = Math.min(bytes.length, 4000);
  let oddNulls = 0;
  let evenNulls = 0;
  for (let i = 0; i < sampleLength; i += 1) {
    if (bytes[i] === 0 && i % 2 === 0) evenNulls += 1;
    if (bytes[i] === 0 && i % 2 === 1) oddNulls += 1;
  }
  if (oddNulls > sampleLength * 0.2) return new TextDecoder("utf-16le").decode(buffer);
  if (evenNulls > sampleLength * 0.2) return new TextDecoder("utf-16be").decode(buffer);
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
  } catch {
    return new TextDecoder("windows-1252").decode(buffer);
  }
}

function looksLikeBinaryExcel(text) {
  const sample = text.slice(0, 4000);
  if (!sample) return false;
  const replacementChars = (sample.match(/\uFFFD/g) || []).length;
  const controlChars = (sample.match(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g) || []).length;
  const hasTextStructure = /<html|<table|<Workbook|<ss:Workbook|[\t;,]\w+/i.test(sample);
  return !hasTextStructure && (replacementChars > 20 || controlChars > sample.length * 0.05);
}

function readUInt16(bytes, offset) {
  return bytes[offset] | (bytes[offset + 1] << 8);
}

function readUInt32(bytes, offset) {
  return (bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16) | (bytes[offset + 3] << 24)) >>> 0;
}

function readInt32(bytes, offset) {
  return bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16) | (bytes[offset + 3] << 24);
}

function decodeExcelText(bytes, isUtf16) {
  if (!bytes.length) return "";
  return new TextDecoder(isUtf16 ? "utf-16le" : "windows-1252").decode(bytes);
}

function sectorOffset(sectorId, sectorSize) {
  return (sectorId + 1) * sectorSize;
}

function readSectorChain(bytes, startSector, fat, sectorSize, maxBytes = Infinity) {
  const parts = [];
  let sector = startSector;
  let guard = 0;
  let read = 0;
  while (sector >= 0 && sector < fat.length && sector !== 0xfffffffe && guard < fat.length + 10 && read < maxBytes) {
    const offset = sectorOffset(sector, sectorSize);
    const available = Math.min(sectorSize, bytes.length - offset, maxBytes - read);
    if (available <= 0) break;
    parts.push(bytes.slice(offset, offset + available));
    read += available;
    sector = fat[sector];
    guard += 1;
  }
  const out = new Uint8Array(read);
  let cursor = 0;
  parts.forEach((part) => {
    out.set(part, cursor);
    cursor += part.length;
  });
  return out;
}

function extractOleWorkbookStream(buffer) {
  const bytes = new Uint8Array(buffer);
  if (!(bytes[0] === 0xd0 && bytes[1] === 0xcf && bytes[2] === 0x11 && bytes[3] === 0xe0)) return null;
  const sectorSize = 1 << readUInt16(bytes, 30);
  const firstDirSector = readInt32(bytes, 48);
  const difat = [];
  for (let offset = 76; offset < 512; offset += 4) {
    const sector = readUInt32(bytes, offset);
    if (sector !== 0xffffffff) difat.push(sector);
  }
  const fat = [];
  difat.forEach((fatSector) => {
    const offset = sectorOffset(fatSector, sectorSize);
    for (let i = 0; i < sectorSize; i += 4) fat.push(readUInt32(bytes, offset + i));
  });
  const directory = readSectorChain(bytes, firstDirSector, fat, sectorSize);
  const entries = [];
  for (let offset = 0; offset + 128 <= directory.length; offset += 128) {
    const nameLength = readUInt16(directory, offset + 64);
    if (!nameLength) continue;
    const nameBytes = directory.slice(offset, offset + Math.max(0, nameLength - 2));
    const name = decodeExcelText(nameBytes, true).replace(/\0/g, "");
    entries.push({
      name,
      type: directory[offset + 66],
      startSector: readInt32(directory, offset + 116),
      size: readUInt32(directory, offset + 120)
    });
  }
  const workbook = entries.find((entry) => /^(Workbook|Book)$/i.test(entry.name));
  if (!workbook) return null;
  return readSectorChain(bytes, workbook.startSector, fat, sectorSize, workbook.size);
}

class BiffChunkReader {
  constructor(chunks) {
    this.chunks = chunks.filter((chunk) => chunk?.length);
    this.chunkIndex = 0;
    this.offset = 0;
  }
  ensureChunk() {
    while (this.chunkIndex < this.chunks.length && this.offset >= this.chunks[this.chunkIndex].length) {
      this.chunkIndex += 1;
      this.offset = 0;
    }
  }
  readByte() {
    this.ensureChunk();
    if (this.chunkIndex >= this.chunks.length) return 0;
    return this.chunks[this.chunkIndex][this.offset++];
  }
  readUInt16() {
    const a = this.readByte();
    const b = this.readByte();
    return a | (b << 8);
  }
  readUInt32() {
    const a = this.readByte();
    const b = this.readByte();
    const c = this.readByte();
    const d = this.readByte();
    return (a | (b << 8) | (c << 16) | (d << 24)) >>> 0;
  }
  readBytes(length) {
    const out = new Uint8Array(length);
    for (let i = 0; i < length; i += 1) out[i] = this.readByte();
    return out;
  }
  skip(length) {
    for (let i = 0; i < length; i += 1) this.readByte();
  }
  readChars(charCount, isUtf16) {
    const bytes = [];
    let wide = isUtf16;
    for (let i = 0; i < charCount; i += 1) {
      this.ensureChunk();
      if (this.chunkIndex >= this.chunks.length) break;
      if (this.offset >= this.chunks[this.chunkIndex].length) {
        this.chunkIndex += 1;
        this.offset = 0;
        wide = !!(this.readByte() & 0x01);
      }
      if (wide) {
        bytes.push(this.readByte(), this.readByte());
      } else {
        bytes.push(this.readByte());
      }
    }
    return decodeExcelText(new Uint8Array(bytes), wide);
  }
}

function parseBiffString(reader) {
  const charCount = reader.readUInt16();
  const flags = reader.readByte();
  const isUtf16 = !!(flags & 0x01);
  const hasRichText = !!(flags & 0x08);
  const hasExt = !!(flags & 0x04);
  const richRuns = hasRichText ? reader.readUInt16() : 0;
  const extSize = hasExt ? reader.readUInt32() : 0;
  const text = reader.readChars(charCount, isUtf16);
  if (richRuns) reader.skip(richRuns * 4);
  if (extSize) reader.skip(extSize);
  return text;
}

function decodeRk(raw) {
  const divide = raw & 0x01;
  const isInteger = raw & 0x02;
  let value;
  if (isInteger) {
    value = raw >> 2;
  } else {
    const buffer = new ArrayBuffer(8);
    const view = new DataView(buffer);
    view.setUint32(0, 0, true);
    view.setUint32(4, raw & 0xfffffffc, true);
    value = view.getFloat64(0, true);
  }
  return divide ? value / 100 : value;
}

function formatExcelNumber(value) {
  if (!Number.isFinite(value)) return "";
  if (Number.isInteger(value)) return String(value);
  return String(value).replace(/\.?0+$/, "");
}

function parseBiffWorkbook(workbookBytes) {
  const records = [];
  for (let offset = 0; offset + 4 <= workbookBytes.length;) {
    const type = readUInt16(workbookBytes, offset);
    const length = readUInt16(workbookBytes, offset + 2);
    const data = workbookBytes.slice(offset + 4, offset + 4 + length);
    records.push({ type, data, offset });
    offset += 4 + length;
  }
  const sheetOffsets = [];
  const sstChunks = [];
  let collectingSst = false;
  records.forEach((record) => {
    if (record.type === 0x0085 && record.data.length >= 8) sheetOffsets.push(readUInt32(record.data, 0));
    if (record.type === 0x00fc) {
      collectingSst = true;
      sstChunks.push(record.data.slice(8));
      return;
    }
    if (collectingSst && record.type === 0x003c) {
      sstChunks.push(record.data);
      return;
    }
    if (collectingSst && record.type !== 0x003c) collectingSst = false;
  });
  const sst = [];
  if (sstChunks.length) {
    const reader = new BiffChunkReader(sstChunks);
    const uniqueCount = records.find((record) => record.type === 0x00fc)?.data ? readUInt32(records.find((record) => record.type === 0x00fc).data, 4) : 0;
    for (let i = 0; i < uniqueCount; i += 1) sst.push(parseBiffString(reader));
  }
  const startOffset = sheetOffsets[0] || records.find((record) => record.type === 0x0809 && record.offset > 0)?.offset || 0;
  const rows = [];
  const setCell = (rowIndex, colIndex, value) => {
    if (rowIndex == null || colIndex == null) return;
    rows[rowIndex] = rows[rowIndex] || [];
    rows[rowIndex][colIndex] = String(value ?? "").trim();
  };
  let inSheet = false;
  let lastFormulaCell = null;
  for (const record of records) {
    if (record.offset < startOffset) continue;
    if (record.type === 0x0809) {
      if (inSheet) break;
      inSheet = true;
      continue;
    }
    if (!inSheet) continue;
    const d = record.data;
    if (record.type === 0x000a) break;
    if (record.type === 0x00fd && d.length >= 10) {
      setCell(readUInt16(d, 0), readUInt16(d, 2), sst[readUInt32(d, 6)] || "");
    } else if (record.type === 0x0204 && d.length >= 8) {
      const reader = new BiffChunkReader([d.slice(6)]);
      setCell(readUInt16(d, 0), readUInt16(d, 2), parseBiffString(reader));
    } else if (record.type === 0x0203 && d.length >= 14) {
      setCell(readUInt16(d, 0), readUInt16(d, 2), formatExcelNumber(new DataView(d.buffer, d.byteOffset + 6, 8).getFloat64(0, true)));
    } else if (record.type === 0x027e && d.length >= 10) {
      setCell(readUInt16(d, 0), readUInt16(d, 2), formatExcelNumber(decodeRk(readUInt32(d, 6))));
    } else if (record.type === 0x00bd && d.length >= 8) {
      const row = readUInt16(d, 0);
      const firstCol = readUInt16(d, 2);
      const lastCol = readUInt16(d, d.length - 2);
      for (let col = firstCol, pos = 4; col <= lastCol && pos + 6 <= d.length - 2; col += 1, pos += 6) {
        setCell(row, col, formatExcelNumber(decodeRk(readUInt32(d, pos + 2))));
      }
    } else if (record.type === 0x0006 && d.length >= 14) {
      const row = readUInt16(d, 0);
      const col = readUInt16(d, 2);
      lastFormulaCell = { row, col };
      const result = d.slice(6, 14);
      if (!(result[6] === 0xff && result[7] === 0xff)) {
        setCell(row, col, formatExcelNumber(new DataView(result.buffer, result.byteOffset, 8).getFloat64(0, true)));
      }
    } else if (record.type === 0x0207 && lastFormulaCell) {
      const reader = new BiffChunkReader([d]);
      setCell(lastFormulaCell.row, lastFormulaCell.col, parseBiffString(reader));
      lastFormulaCell = null;
    } else if (record.type === 0x0205 && d.length >= 8) {
      setCell(readUInt16(d, 0), readUInt16(d, 2), d[6] ? "TRUE" : "FALSE");
    }
  }
  return rows
    .map((row) => {
      const last = row.reduce((max, value, index) => value ? index : max, -1);
      return Array.from({ length: last + 1 }, (_, index) => row[index] || "");
    })
    .filter((row) => row.some(Boolean));
}

async function inflateRaw(bytes) {
  if (!("DecompressionStream" in window)) {
    throw new Error("Este navegador no permite descomprimir XLSX localmente. Usa Chrome/Edge actualizado o guarda como CSV.");
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function unzipXlsx(buffer) {
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);
  const decoder = new TextDecoder("utf-8");
  const files = {};
  for (let i = bytes.length - 22; i >= 0; i -= 1) {
    if (view.getUint32(i, true) !== 0x06054b50) continue;
    const entries = view.getUint16(i + 10, true);
    let offset = view.getUint32(i + 16, true);
    for (let entry = 0; entry < entries; entry += 1) {
      if (view.getUint32(offset, true) !== 0x02014b50) break;
      const method = view.getUint16(offset + 10, true);
      const compressedSize = view.getUint32(offset + 20, true);
      const nameLength = view.getUint16(offset + 28, true);
      const extraLength = view.getUint16(offset + 30, true);
      const commentLength = view.getUint16(offset + 32, true);
      const localOffset = view.getUint32(offset + 42, true);
      const name = decoder.decode(bytes.slice(offset + 46, offset + 46 + nameLength));
      const localNameLength = view.getUint16(localOffset + 26, true);
      const localExtraLength = view.getUint16(localOffset + 28, true);
      const dataStart = localOffset + 30 + localNameLength + localExtraLength;
      const compressed = bytes.slice(dataStart, dataStart + compressedSize);
      const content = method === 0 ? compressed : await inflateRaw(compressed);
      files[name] = decoder.decode(content);
      offset += 46 + nameLength + extraLength + commentLength;
    }
    return files;
  }
  throw new Error("No se pudo abrir el archivo XLSX.");
}

function xmlDoc(text) {
  return new DOMParser().parseFromString(text, "application/xml");
}

function cellRefToIndexes(ref) {
  const match = /^([A-Z]+)(\d+)/i.exec(ref || "");
  if (!match) return [0, 0];
  const col = match[1].toUpperCase().split("").reduce((sum, char) => sum * 26 + char.charCodeAt(0) - 64, 0) - 1;
  return [Number(match[2]) - 1, col];
}

function parseSharedStrings(xml) {
  if (!xml) return [];
  return [...xmlDoc(xml).getElementsByTagName("si")].map((si) => [...si.getElementsByTagName("t")].map((t) => t.textContent).join(""));
}

function parseSheetRows(xml, sharedStrings) {
  const rows = [];
  const doc = xmlDoc(xml);
  let maxCol = 0;
  [...doc.getElementsByTagName("row")].forEach((rowEl) => {
    const row = [];
    [...rowEl.getElementsByTagName("c")].forEach((cell) => {
      const [, col] = cellRefToIndexes(cell.getAttribute("r"));
      maxCol = Math.max(maxCol, col);
      const type = cell.getAttribute("t");
      const valueEl = cell.getElementsByTagName("v")[0] || cell.getElementsByTagName("t")[0];
      let value = valueEl ? valueEl.textContent : "";
      if (type === "s") value = sharedStrings[Number(value)] || "";
      if (type === "inlineStr") value = [...cell.getElementsByTagName("t")].map((t) => t.textContent).join("");
      row[col] = value.trim();
    });
    if (row.some(Boolean)) {
      for (let i = 0; i <= maxCol; i += 1) row[i] = row[i] || "";
      rows.push(row);
    }
  });
  return rows;
}

async function readRowsFromFile(file) {
  logLoad("archivo", { name: file.name, sizeMB: (file.size / 1024 / 1024).toFixed(2) });
  updateProcessingStatus(`Leyendo archivo ${file.name} (${(file.size / 1024 / 1024).toFixed(1)} MB)...`);
  const buffer = await file.arrayBuffer();
  updateProcessingStatus("Archivo en memoria. Detectando formato...");
  const signature = new Uint8Array(buffer.slice(0, 8));
  const isZip = signature[0] === 0x50 && signature[1] === 0x4b;
  const isOldBinaryXls = signature[0] === 0xd0 && signature[1] === 0xcf && signature[2] === 0x11 && signature[3] === 0xe0;
  if (/\.xlsx$/i.test(file.name) || isZip) {
    logLoad("formato", "xlsx/zip");
    updateProcessingStatus("Leyendo XLSX. Descomprimiendo hojas...");
    const files = await unzipXlsx(buffer);
    updateProcessingStatus("XLSX descomprimido. Leyendo primera hoja...");
    const sharedStrings = parseSharedStrings(files["xl/sharedStrings.xml"]);
    const sheetName = Object.keys(files).find((name) => /^xl\/worksheets\/sheet\d+\.xml$/.test(name));
    if (!sheetName) throw new Error("No encontre hojas dentro del XLSX.");
    const rows = parseSheetRows(files[sheetName], sharedStrings);
    logLoad("filas leidas", { sheetName, rows: rows.length, columns: rows.reduce((max, row) => Math.max(max, row.length), 0) });
    updateProcessingStatus(`Hoja leida: ${rows.length} fila(s). Preparando vista previa...`);
    return rows;
  }
  if (/\.xls$/i.test(file.name) && isOldBinaryXls) {
    logLoad("formato", "xls binario");
    updateProcessingStatus("Leyendo XLS antiguo/protegido...");
    const workbook = extractOleWorkbookStream(buffer);
    if (!workbook) throw new Error("No pude encontrar la hoja de datos dentro del XLS protegido.");
    const rows = parseBiffWorkbook(workbook);
    if (rows.length) {
      updateProcessingStatus(`XLS leido: ${rows.length} fila(s). Preparando vista previa...`);
      logLoad("filas leidas", { rows: rows.length, columns: rows.reduce((max, row) => Math.max(max, row.length), 0) });
      return rows;
    }
    throw new Error("Pude abrir el XLS, pero no encontre filas legibles en la primera hoja.");
  }
  const text = decodeWorkbookText(buffer);
  if (/\.xls$/i.test(file.name) && looksLikeBinaryExcel(text)) {
    throw new Error("No pude leer este XLS como tabla. Probablemente es un Excel antiguo binario: abre el archivo en Excel, guardalo como .xlsx y vuelve a cargarlo.");
  }
  const trimmed = text.trimStart();
  if (/\.xls$/i.test(file.name) && /^</.test(trimmed)) {
    if (/<html|<table/i.test(trimmed)) {
      const rows = parseHtmlTable(text);
      if (rows.length) {
        updateProcessingStatus(`Tabla HTML leida: ${rows.length} fila(s).`);
        logLoad("filas leidas", { type: "html", rows: rows.length });
        return rows;
      }
    }
    if (/<Workbook|<ss:Workbook/i.test(trimmed)) {
      const rows = parseExcelXml(text);
      if (rows.length) {
        updateProcessingStatus(`XML de Excel leido: ${rows.length} fila(s).`);
        logLoad("filas leidas", { type: "xml", rows: rows.length });
        return rows;
      }
    }
  }
  const rows = parseDelimited(text);
  updateProcessingStatus(`Archivo de texto leido: ${rows.length} fila(s).`);
  logLoad("filas leidas", { type: "texto", rows: rows.length });
  return rows;
}

function normalizeHeader(value) {
  return value.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function normalizeNodeText(value) {
  return normalizeHeader(String(value || "").replace(/^\s*\d+\s*[-.)]*\s*/, ""));
}

function hierarchyColumnIndexes(headers) {
  const normalized = headers.map(normalizeHeader);
  const aliases = [
    ["linea", "lineadenegocio", "negocio"],
    ["sistema", "sistemas"],
    ["categoria", "categorias"],
    ["familia", "familias"]
  ];
  return aliases.map((group, index) => {
    const found = normalized.findIndex((header) => group.includes(header));
    return found >= 0 ? found : index;
  });
}

function suggestedColumn(headers, aliases) {
  const normalized = headers.map(normalizeHeader);
  const found = normalized.findIndex((header) => aliases.some((alias) => header.includes(alias)));
  return found >= 0 ? found : "";
}

function columnOptions(headers, selected = "") {
  return [`<option value="">Sin columna</option>`]
    .concat(headers.map((header, index) => `<option value="${index}" ${String(index) === String(selected) ? "selected" : ""}>${header || `Columna ${index + 1}`}</option>`))
    .join("");
}

function roleColumnOptions(headers, role, selected = "") {
  const allowed = headers
    .map((header, index) => ({ header, index, role: $(`colRole${index}`)?.value || "ignore" }))
    .filter((col) => col.role === role);
  return [`<option value="">Sin columna</option>`]
    .concat(allowed.map((col) => `<option value="${col.index}" ${String(col.index) === String(selected) ? "selected" : ""}>${col.header || `Columna ${excelColumnName(col.index)}`}</option>`))
    .join("");
}

function refreshHierarchyMappingOptions() {
  if (!pendingHierarchyLoad || !$("codeCol0")) return;
  const { headers } = pendingHierarchyLoad;
  levelNames.forEach((_, level) => {
    const codeSelect = $(`codeCol${level}`);
    const descSelect = $(`descCol${level}`);
    const oldCode = codeSelect.value;
    const oldDesc = descSelect.value;
    codeSelect.innerHTML = roleColumnOptions(headers, "code", oldCode);
    descSelect.innerHTML = roleColumnOptions(headers, "value", oldDesc);
  });
}

function excelColumnName(index) {
  let name = "";
  let n = index + 1;
  while (n > 0) {
    const mod = (n - 1) % 26;
    name = String.fromCharCode(65 + mod) + name;
    n = Math.floor((n - mod) / 26);
  }
  return name;
}

function internalNodeCode(level, name) {
  const base = normalizeHeader(name).slice(0, 18) || "nodo";
  return `INT-L${level + 1}-${base}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 5)}`;
}

function hierarchyNodeKey(parent, level, name, code, hierarchyId) {
  const cleanCode = normalizeHeader(code);
  const cleanName = normalizeNodeText(name);
  return `${hierarchyId}|${parent || ""}|${level}|${cleanCode ? `c:${cleanCode}` : `n:${cleanName}`}`;
}

function buildHierarchyNodeIndex(hierarchyId) {
  const index = new Map();
  data.nodes.forEach((node) => {
    if (nodeHierarchy(node) !== hierarchyId) return;
    if (node.code && !node.internalCode) {
      index.set(hierarchyNodeKey(node.parent, node.level, node.name, node.code, hierarchyId), node.id);
    }
    index.set(hierarchyNodeKey(node.parent, node.level, node.name, "", hierarchyId), node.id);
  });
  return index;
}

function mergeNodeInto(duplicateId, keepId) {
  data.nodes.forEach((node) => {
    if (node.parent === duplicateId) node.parent = keepId;
  });
  data.products.forEach((product) => {
    if (product.assignments) {
      Object.keys(product.assignments).forEach((hierarchyId) => {
        if (product.assignments[hierarchyId] === duplicateId) product.assignments[hierarchyId] = keepId;
      });
    }
    if (product.node === duplicateId) product.node = keepId;
    if (product.originalNode === duplicateId) product.originalNode = keepId;
    if (product.suggestion === duplicateId) product.suggestion = keepId;
  });
  data.nodes.splice(0, data.nodes.length, ...data.nodes.filter((node) => node.id !== duplicateId));
}

function consolidateEquivalentNodes(hierarchyId) {
  let merged = 0;
  let changed = true;
  while (changed) {
    changed = false;
    const seen = new Map();
    const nodes = data.nodes
      .filter((node) => nodeHierarchy(node) === hierarchyId)
      .sort((a, b) => a.level - b.level);
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      const nameKey = `${node.parent || ""}|${node.level}|n:${normalizeNodeText(node.name)}`;
      const codeKey = node.code && !node.internalCode ? `${node.parent || ""}|${node.level}|c:${normalizeHeader(node.code)}` : "";
      const existingId = seen.get(nameKey) || (codeKey ? seen.get(codeKey) : "");
      if (existingId && existingId !== node.id) {
        mergeNodeInto(node.id, existingId);
        merged += 1;
        changed = true;
        break;
      }
      seen.set(nameKey, node.id);
      if (codeKey) seen.set(codeKey, node.id);
    }
  }
  return merged;
}

function upsertHierarchyNode(parent, level, name, code = "", hierarchyId = state.activeHierarchyId, nodeIndex = null) {
  const cleanName = name.trim();
  if (!cleanName) return parent;
  const cleanCode = code.trim() || internalNodeCode(level, cleanName);
  const key = hierarchyNodeKey(parent, level, cleanName, code, hierarchyId);
  if (nodeIndex?.has(key)) return nodeIndex.get(key);
  const existing = data.nodes.find((node) => {
    const samePlace = nodeHierarchy(node) === hierarchyId && node.parent === parent && node.level === level;
    if (!samePlace) return false;
    const sameCode = code.trim() && node.code && normalizeHeader(node.code) === normalizeHeader(code);
    const sameName = normalizeNodeText(node.name) === normalizeNodeText(cleanName);
    return sameCode || sameName;
  });
  if (existing) {
    if (nodeIndex) nodeIndex.set(key, existing.id);
    return existing.id;
  }
  const id = `n-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  data.nodes.push({ id, parent, level, name: cleanName, code: cleanCode, internalCode: !code.trim(), hierarchyId, order: nextNodeOrder(hierarchyId, parent) });
  if (nodeIndex) {
    nodeIndex.set(key, id);
    nodeIndex.set(hierarchyNodeKey(parent, level, cleanName, "", hierarchyId), id);
  }
  return id;
}

async function loadHierarchyFromFile() {
  const fileInput = $("loadFile");
  const config = $("loadConfig");
  const file = fileInput?.files?.[0];
  if (pendingHierarchyLoad && $("descCol0")) {
    if (pendingHierarchyLoad.loadOptions?.shape === "withProducts" || $("productCodeCol")) {
      applyMappedHierarchyProductsLoad();
      return;
    }
    applyMappedHierarchyLoad();
    return;
  }
  if (!file) {
    if (config) {
      config.insertAdjacentHTML("beforeend", `<div class="load-result"><strong>Falta archivo</strong><br>Selecciona un CSV o TSV con columnas Linea, Sistema, Categoria y Familia.</div>`);
    }
    return;
  }
  const loadOptions = {
    mode: ($("hierarchyUnifiedAction")?.value === "complement" ? "update" : $("hierarchyUnifiedAction")?.value) || $("loadMode")?.value || "new",
    targetHierarchyId: $("hierarchyUnifiedTarget")?.value || $("loadTargetHierarchy")?.value || state.activeHierarchyId,
    name: $("hierarchyUnifiedName")?.value.trim() || $("loadName")?.value.trim() || "",
    shape: "only"
  };
  logLoad("carga jerarquia sola", loadOptions);
  let rows = [];
  try {
    setProcessingState(true, "Leyendo archivo y detectando columnas...");
    rows = await readRowsFromFile(file);
  } catch (error) {
    setProcessingState(false);
    config.innerHTML = `<div class="load-result"><strong>No se pudo leer</strong><br>${error.message}</div>`;
    return;
  }
  updateProcessingStatus(`Archivo leido. Preparando vista previa de ${rows.length} fila(s)...`);
  if (rows.length < 2) {
    setProcessingState(false);
    config.innerHTML = `<div class="load-result"><strong>No se pudo leer</strong><br>El archivo no tiene filas suficientes para cargar una jerarquia.</div>`;
    return;
  }
  const colCount = rows.reduce((max, row) => Math.max(max, row.length), 0);
  const normalizedRows = rows.map((row) => Array.from({ length: colCount }, (_, index) => row[index] || ""));
  pendingHierarchyLoad = {
    fileName: file.name,
    headers: normalizedRows[0].map((header, index) => header || `Columna ${excelColumnName(index)}`),
    rows: normalizedRows.slice(1),
    previewRows: normalizedRows.slice(0, 9),
    totalRows: normalizedRows.length,
    colCount,
    loadOptions
  };
  logLoad("mapeo preparado", { type: "hierarchyOnly", rows: pendingHierarchyLoad.rows.length, columns: colCount, headers: pendingHierarchyLoad.headers.slice(0, 12) });
  setTimeout(() => {
    renderHierarchyMapping();
    setProcessingState(false);
  }, 0);
}

function renderHierarchyMapping() {
  const config = $("loadConfig");
  const { fileName, headers, rows, previewRows, totalRows, colCount } = pendingHierarchyLoad;
  const isHierarchyWithProducts = pendingHierarchyLoad.loadOptions?.shape === "withProducts";
  const descSuggestions = [
    suggestedColumn(headers, ["linea", "lineadenegocio"]),
    suggestedColumn(headers, ["sistema"]),
    suggestedColumn(headers, ["categoria"]),
    suggestedColumn(headers, ["familia"])
  ];
  const codeSuggestions = [
    suggestedColumn(headers, ["codigolinea", "codlinea", "idlinea"]),
    suggestedColumn(headers, ["codigosistema", "codsistema", "idsistema"]),
    suggestedColumn(headers, ["codigocategoria", "codcategoria", "idcategoria"]),
    suggestedColumn(headers, ["codigofamilia", "codfamilia", "idfamilia"])
  ];
  config.innerHTML = `
    <div class="load-flow">
      <span>1. Tipo de carga</span>
      <span class="active">2. Archivo leido</span>
      <span class="active">3. Mapear columnas</span>
      <span>4. Cargar</span>
    </div>
    <div class="load-result">
      <strong>Archivo leido: ${fileName}</strong><br>
      Detecte ${colCount} columna(s) y ${totalRows} fila(s) incluyendo encabezado. Abajo ves las columnas tal como vienen en el archivo.
    </div>
    <div class="excel-preview-wrap">
      <table class="excel-preview">
        <thead>
          <tr>
            <th></th>
            ${headers.map((_, index) => `<th>${excelColumnName(index)}</th>`).join("")}
          </tr>
          <tr>
            <th>Columna</th>
            ${headers.map((header, index) => `
              <th>
                <div class="excel-col-title">${header || `Columna ${excelColumnName(index)}`}</div>
                <select id="colRole${index}">
                  <option value="ignore">No cargar</option>
                  <option value="code">Codigo</option>
                  <option value="value">Valor</option>
                </select>
              </th>
            `).join("")}
          </tr>
        </thead>
        <tbody>
          ${previewRows.map((row, rowIndex) => `
            <tr>
              <th>${rowIndex + 1}</th>
              ${headers.map((_, colIndex) => `<td>${row[colIndex] || ""}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    <div class="rule-note">Primero marca visualmente si una columna es codigo, valor o no se carga. Luego relaciona abajo el codigo con su valor para cada nivel.</div>
    ${isHierarchyWithProducts ? `<div class="load-error"><strong>Modo activo: Jerarquia con productos</strong><span>Esta carga debe terminar con productos asociados. Si el resultado queda en cero, la app lo tratara como error de carga.</span></div>` : ""}
    <div class="load-config">
      ${levelNames.map((level, index) => `
        <div class="load-map-row">
          <strong>${index + 1}. ${level}</strong>
          <label>Codigo
            <select id="codeCol${index}"></select>
          </label>
          <label>Descripcion
            <select id="descCol${index}"></select>
          </label>
        </div>
      `).join("")}
    </div>
    <div class="rule-note">Si un nivel no tiene codigo, la app le asignara un codigo interno. Si no quieres cargar un nivel, deja su descripcion en blanco.</div>
  `;
  codeSuggestions.forEach((col) => { if (col !== "") $(`colRole${col}`).value = "code"; });
  descSuggestions.forEach((col) => { if (col !== "") $(`colRole${col}`).value = "value"; });
  refreshHierarchyMappingOptions();
  codeSuggestions.forEach((col, index) => { if (col !== "") $(`codeCol${index}`).value = String(col); });
  descSuggestions.forEach((col, index) => { if (col !== "") $(`descCol${index}`).value = String(col); });
  $("modalConfirm").textContent = "Cargar jerarquia";
}

function applyMappedHierarchyLoad() {
  const startedAt = performance.now();
  const config = $("loadConfig");
  const { fileName, rows } = pendingHierarchyLoad;
  const options = pendingHierarchyLoad.loadOptions || {};
  const mode = options.mode || $("loadMode")?.value || "new";
  const existingHierarchyId = options.targetHierarchyId || $("loadTargetHierarchy")?.value || state.activeHierarchyId;
  const newHierarchyId = `h-${Date.now()}`;
  const hierarchyId = mode === "new" ? newHierarchyId : existingHierarchyId;
  const hierarchyName = options.name || $("loadName")?.value.trim() || fileName.replace(/\.[^.]+$/, "");
  const mappings = levelNames.map((_, level) => ({
    code: $(`codeCol${level}`).value,
    desc: $(`descCol${level}`).value
  }));
  logLoad("aplicar jerarquia sola", { mode, hierarchyId, hierarchyName, rows: rows.length, mappings });
  if (!mappings.some((mapping) => mapping.desc !== "")) {
    config.insertAdjacentHTML("beforeend", `<div class="load-result"><strong>Falta descripcion</strong><br>Selecciona al menos una columna de descripcion.</div>`);
    return;
  }
  let added = 0;
  let touched = 0;
  recordHistoryForLoad("cargar jerarquia", rows.length);
  if (mode === "replace") {
    const removeIds = new Set(data.nodes.filter((node) => nodeHierarchy(node) === hierarchyId).map((node) => node.id));
    data.nodes = data.nodes.filter((node) => !removeIds.has(node.id));
    data.products.forEach((product) => {
      if (product.assignments) delete product.assignments[hierarchyId];
    });
  }
  if (mode === "new") {
    data.hierarchies.push({ id: hierarchyId, name: hierarchyName, status: "Editable", products: 0 });
  }
  processHierarchyRows(rows, mappings, hierarchyId, (result) => {
    added = result.added;
    touched = result.touched;
    const merged = consolidateEquivalentNodes(hierarchyId);
    finishHierarchyLoad(config, fileName, hierarchyId, added, touched, performance.now() - startedAt, merged);
  });
}

function processHierarchyRows(rows, mappings, hierarchyId, done) {
  let added = 0;
  let touched = 0;
  let index = 0;
  const total = rows.length;
  const nodeIndex = buildHierarchyNodeIndex(hierarchyId);
  setProcessingState(true, progressMessage("Cargando jerarquia", 0, total, "Creando nodos sin duplicar."));
  const step = () => {
    const end = Math.min(index + 1000, total);
    for (; index < end; index += 1) {
      const row = rows[index];
      let parent = null;
      let hasLevel = false;
      mappings.forEach((mapping, level) => {
        if (mapping.desc === "") return;
        const before = data.nodes.length;
        const value = row[Number(mapping.desc)] || "";
        const code = mapping.code === "" ? "" : row[Number(mapping.code)] || "";
        if (value.trim()) {
          hasLevel = true;
          parent = upsertHierarchyNode(parent, level, value, code, hierarchyId, nodeIndex);
          if (data.nodes.length > before) added += 1;
        }
      });
      if (hasLevel) touched += 1;
    }
    updateProcessingStatus(progressMessage("Cargando jerarquia", index, total, "Creando nodos sin duplicar."));
    if (index < total) {
      setTimeout(step, 0);
    } else {
      setProcessingState(false);
      done({ added, touched });
    }
  };
  setTimeout(step, 0);
}

function finishHierarchyLoad(config, fileName, hierarchyId, added, touched, elapsedMs = 0, merged = 0) {
  setProcessingState(false);
  state.activeHierarchyId = hierarchyId;
  state.selectedNode = null;
  state.selectedProducts.clear();
  state.expandedNodes = new Set(activeNodes().filter((node) => node.level < 2).map((node) => node.id));
  const finalNodeCount = data.nodes.filter((node) => nodeHierarchy(node) === hierarchyId).length;
  const finalProductCount = data.products.filter((product) => product.assignments?.[hierarchyId]).length;
  logLoad("resultado jerarquia sola", { hierarchyId, added, touched, finalNodeCount, finalProductCount, activeHierarchyId: state.activeHierarchyId });
  addChange("Jerarquia cargada", `${fileName}: ${added} nodo(s) nuevos desde ${touched} fila(s)${merged ? `; ${merged} duplicado(s) consolidados` : ""}.`);
  config.innerHTML = `
    <div class="load-flow">
      <span>1. Tipo de carga</span>
      <span>2. Archivo leido</span>
      <span>3. Columnas mapeadas</span>
      <span class="active">4. Cargado</span>
    </div>
    <div class="load-result">
      <strong>Jerarquia cargada</strong><br>
      Se agregaron ${added} nodo(s) nuevos desde ${touched} fila(s). ${merged ? `Se consolidaron ${merged} nodo(s) equivalentes.` : "No se detectaron duplicados equivalentes."}
    </div>
    <div class="load-preview">
      <div class="load-pill"><strong>${pendingHierarchyLoad?.totalRows || touched}</strong> filas del archivo</div>
      <div class="load-pill"><strong>${added}</strong> nodos nuevos</div>
      <div class="load-pill"><strong>${finalNodeCount}</strong> nodos en jerarquia</div>
      <div class="load-pill"><strong>${finalProductCount}</strong> productos en jerarquia</div>
      <div class="load-pill"><strong>${merged}</strong> duplicados consolidados</div>
      <div class="load-pill"><strong>${(elapsedMs / 1000).toFixed(1)}s</strong> tiempo de carga</div>
    </div>
    ${finalProductCount === 0 ? `<div class="rule-note"><strong>Diagnostico:</strong> esta carga fue de <strong>Jerarquia sola</strong>, por eso no hay productos asociados. Si esperabas productos, debes elegir <strong>Jerarquia con productos</strong> antes de leer el archivo.</div>` : ""}
  `;
  $("modalConfirm").textContent = "Nueva carga";
  pendingHierarchyLoad = null;
  renderChanges();
  renderAll();
}

async function loadHierarchyProductsFromFile() {
  const fileInput = $("loadFile");
  const config = $("loadConfig");
  const file = fileInput?.files?.[0];
  if (pendingHierarchyLoad && $("productCodeCol")) {
    applyMappedHierarchyProductsLoad();
    return;
  }
  if (!file) {
    config.insertAdjacentHTML("beforeend", `<div class="load-result"><strong>Falta archivo</strong><br>Selecciona un Excel, CSV o TSV con jerarquia y productos.</div>`);
    return;
  }
  const loadOptions = {
    action: $("hierarchyUnifiedAction")?.value || $("hierarchyProductAction")?.value || "new",
    targetHierarchyId: $("hierarchyUnifiedTarget")?.value || $("loadHierarchy")?.value || state.activeHierarchyId,
    name: $("hierarchyUnifiedName")?.value.trim() || $("newHierarchyProductName")?.value.trim() || "",
    shape: "withProducts"
  };
  logLoad("carga jerarquia con productos", loadOptions);
  let rows = [];
  try {
    setProcessingState(true, "Leyendo archivo y buscando niveles de jerarquia...");
    rows = await readRowsFromFile(file);
  } catch (error) {
    setProcessingState(false);
    config.innerHTML = `<div class="load-result"><strong>No se pudo leer</strong><br>${error.message}</div>`;
    return;
  }
  updateProcessingStatus(`Archivo leido. Preparando mapeo de ${rows.length} fila(s)...`);
  if (rows.length < 2) {
    setProcessingState(false);
    config.innerHTML = `<div class="load-result"><strong>No se pudo leer</strong><br>El archivo no tiene filas suficientes.</div>`;
    return;
  }
  const colCount = rows.reduce((max, row) => Math.max(max, row.length), 0);
  const normalizedRows = rows.map((row) => Array.from({ length: colCount }, (_, index) => row[index] || ""));
  pendingHierarchyLoad = {
    fileName: file.name,
    headers: normalizedRows[0].map((header, index) => header || `Columna ${excelColumnName(index)}`),
    rows: normalizedRows.slice(1),
    previewRows: normalizedRows.slice(0, 9),
    totalRows: normalizedRows.length,
    colCount,
    loadOptions
  };
  logLoad("mapeo preparado", { type: "hierarchyProducts", rows: pendingHierarchyLoad.rows.length, columns: colCount, headers: pendingHierarchyLoad.headers.slice(0, 12) });
  setTimeout(() => {
    renderHierarchyProductsMapping();
    setProcessingState(false);
  }, 0);
}

function renderHierarchyProductsMapping() {
  renderHierarchyMapping();
  const config = $("loadConfig");
  const { headers } = pendingHierarchyLoad;
  const codeSuggestion = suggestedColumn(headers, ["codigo", "codproducto", "sku", "idproducto"]);
  const descSuggestion = suggestedColumn(headers, ["descripcion", "nombreproducto", "producto", "glosa"]);
  config.insertAdjacentHTML("beforeend", `
    <div class="load-config">
      <div class="load-map-row">
        <strong>Producto</strong>
        <label>Codigo
          <select id="productCodeCol">${columnOptions(headers, codeSuggestion)}</select>
        </label>
        <label>Descripcion
          <select id="productDescCol">${columnOptions(headers, descSuggestion)}</select>
        </label>
      </div>
    </div>
    <div class="rule-note">Cada producto se asignara al nodo mas profundo disponible en su fila.</div>
  `);
  if (codeSuggestion === "") {
    config.insertAdjacentHTML("beforeend", `
      <div class="load-error">
        <strong>No detecte automaticamente el codigo de producto</strong>
        <span>Debes seleccionar manualmente la columna de codigo de producto antes de cargar. Sin esa columna, la app no puede asociar productos a la jerarquia.</span>
      </div>
    `);
  }
  logLoad("producto detectado", { codeSuggestion, descSuggestion, codeHeader: headers[codeSuggestion] || null, descHeader: headers[descSuggestion] || null });
  $("modalConfirm").textContent = "Cargar jerarquia y productos";
}

function applyMappedHierarchyProductsLoad() {
  const startedAt = performance.now();
  const config = $("loadConfig");
  const { fileName, rows } = pendingHierarchyLoad;
  const options = pendingHierarchyLoad.loadOptions || {};
  const action = options.action || $("hierarchyProductAction")?.value || "new";
  const existingHierarchyId = options.targetHierarchyId || $("loadHierarchy")?.value || state.activeHierarchyId;
  const hierarchyId = action === "new" ? `h-${Date.now()}` : existingHierarchyId;
  const hierarchyName = options.name || $("newHierarchyProductName")?.value.trim() || fileName.replace(/\.[^.]+$/, "");
  const mode = action === "replace" ? "replace" : "complement";
  const productCodeCol = $("productCodeCol").value;
  const productDescCol = $("productDescCol").value;
  if (productCodeCol === "") {
    config.insertAdjacentHTML("beforeend", `<div class="load-result"><strong>Falta codigo de producto</strong><br>Selecciona la columna del codigo de producto.</div>`);
    logLoad("bloqueado", "Falta codigo de producto");
    return;
  }
  const mappings = levelNames.map((_, level) => ({ code: $(`codeCol${level}`).value, desc: $(`descCol${level}`).value }));
  if (!mappings.some((mapping) => mapping.desc !== "")) {
    config.insertAdjacentHTML("beforeend", `<div class="load-error"><strong>Falta ruta de jerarquia</strong><span>Selecciona al menos una columna de descripcion de nivel. Sin ruta, los productos no tienen donde ubicarse.</span></div>`);
    logLoad("bloqueado", "Falta ruta de jerarquia");
    return;
  }
  logLoad("aplicar jerarquia con productos", { action, hierarchyId, hierarchyName, rows: rows.length, productCodeCol, productDescCol, productCodeHeader: pendingHierarchyLoad.headers[productCodeCol] || null, mappings });
  recordHistoryForLoad("cargar jerarquia con productos", rows.length);
  if (action === "new") {
    data.hierarchies.push({ id: hierarchyId, name: hierarchyName, status: "Editable", products: 0 });
  }
  if (mode === "replace") {
    const removeIds = new Set(data.nodes.filter((node) => nodeHierarchy(node) === hierarchyId).map((node) => node.id));
    data.nodes = data.nodes.filter((node) => !removeIds.has(node.id));
    data.products.forEach((product) => {
      if (product.assignments) delete product.assignments[hierarchyId];
    });
  }
  processHierarchyProductRows(rows, mappings, hierarchyId, productCodeCol, productDescCol, (result) => {
    setProcessingState(false);
    const mergedNodes = consolidateEquivalentNodes(hierarchyId);
    state.activeHierarchyId = hierarchyId;
    state.selectedNode = null;
    state.expandedNodes = new Set(activeNodes().filter((node) => node.level < 2).map((node) => node.id));
    const omitted = result.skippedNoCode + result.skippedNoNode;
    const finalAssigned = data.products.filter((product) => product.assignments?.[hierarchyId]).length;
    logLoad("resultado jerarquia con productos", { hierarchyId, uniqueAssigned: result.uniqueAssigned, finalAssigned, addedProducts: result.addedProducts, reusedProducts: result.reusedProducts, skippedNoCode: result.skippedNoCode, skippedNoNode: result.skippedNoNode, mergedNodes, samples: result.samples });
    const productLoadFailed = finalAssigned === 0 || result.uniqueAssigned === 0;
    addChange("Jerarquia con productos cargada", `${fileName}: ${result.uniqueAssigned} codigo(s) ubicados, ${result.addedProducts} nuevo(s), ${result.reusedProducts} reutilizado(s), ${omitted} fila(s) omitida(s)${mergedNodes ? `, ${mergedNodes} nodo(s) duplicados consolidados` : ""}.`);
    config.innerHTML = `
      <div class="load-flow">
        <span>1. Tipo de carga</span>
        <span>2. Archivo leido</span>
        <span>3. Columnas mapeadas</span>
        <span class="active">4. Cargado</span>
      </div>
      <div class="load-result">
        <strong>${productLoadFailed ? "La jerarquia cargo, pero los productos no" : "Jerarquia con productos cargada"}</strong><br>
        Se ubicaron <strong>${finalAssigned}</strong> producto(s) en esta jerarquia.
      </div>
      <div class="load-preview">
        <div class="load-pill"><strong>${result.totalRows}</strong> filas revisadas</div>
        <div class="load-pill"><strong>${result.addedProducts}</strong> productos nuevos</div>
        <div class="load-pill"><strong>${result.reusedProducts}</strong> productos ya existentes reutilizados</div>
        <div class="load-pill"><strong>${result.duplicateRows}</strong> filas con codigo repetido</div>
        <div class="load-pill"><strong>${omitted}</strong> filas omitidas</div>
        <div class="load-pill"><strong>${result.addedNodes}</strong> nodos nuevos</div>
        <div class="load-pill"><strong>${mergedNodes}</strong> duplicados consolidados</div>
        <div class="load-pill"><strong>${finalAssigned}</strong> productos en jerarquia</div>
        <div class="load-pill"><strong>${((performance.now() - startedAt) / 1000).toFixed(1)}s</strong> tiempo de carga</div>
      </div>
      ${productLoadFailed ? `<div class="load-error"><strong>No quedaron productos asociados</strong><span>Esto es un error de carga, no una carga exitosa. Revisa en el diagnostico si hubo filas sin codigo (${result.skippedNoCode}) o sin ruta (${result.skippedNoNode}).</span></div>` : ""}
      ${omitted || result.duplicateRows ? `
        <div class="rule-note">
          Omitidas: ${result.skippedNoCode} sin codigo de producto y ${result.skippedNoNode} sin ruta de jerarquia. 
          Repetidas: ${result.duplicateRows} fila(s) traian un codigo ya visto en el mismo archivo; queda una sola ubicacion final por codigo dentro de esta jerarquia.
        </div>
      ` : ""}
    `;
    pendingHierarchyLoad = null;
    $("modalConfirm").textContent = "Nueva carga";
    renderChanges();
    renderAll();
  });
}

function processHierarchyProductRows(rows, mappings, hierarchyId, productCodeCol, productDescCol, done) {
  let addedNodes = 0;
  let addedProducts = 0;
  let reusedProducts = 0;
  let duplicateRows = 0;
  let skippedNoCode = 0;
  let skippedNoNode = 0;
  let index = 0;
  const total = rows.length;
  const nodeIndex = buildHierarchyNodeIndex(hierarchyId);
  const productIndex = new Map(data.products.map((product) => [product.id, product]));
  const existingCodesBeforeLoad = new Set(productIndex.keys());
  const assignedCodes = new Set();
  const reusedCodes = new Set();
  const samples = { noCode: [], noNode: [], assigned: [] };
  setProcessingState(true, progressMessage("Cargando jerarquia y productos", 0, total, "Asignando cada producto a su ruta."));
  const step = () => {
    const end = Math.min(index + 1000, total);
    for (; index < end; index += 1) {
      const row = rows[index];
      let parent = null;
      let deepest = null;
      mappings.forEach((mapping, level) => {
        if (mapping.desc === "") return;
        const value = row[Number(mapping.desc)] || "";
        const code = mapping.code === "" ? "" : row[Number(mapping.code)] || "";
        if (value.trim()) {
          const before = data.nodes.length;
          parent = upsertHierarchyNode(parent, level, value, code, hierarchyId, nodeIndex);
          deepest = parent;
          if (data.nodes.length > before) addedNodes += 1;
        }
      });
      const productCode = cellText(row[Number(productCodeCol)]);
      if (!productCode) {
        if (samples.noCode.length < 3) samples.noCode.push(index + 2);
        skippedNoCode += 1;
        continue;
      }
      if (!deepest) {
        if (samples.noNode.length < 3) samples.noNode.push({ row: index + 2, code: productCode });
        skippedNoNode += 1;
        continue;
      }
      if (assignedCodes.has(productCode)) duplicateRows += 1;
      let product = productIndex.get(productCode);
      if (!product) {
        product = { id: productCode, name: productDescCol === "" ? productCode : (cellText(row[Number(productDescCol)]) || productCode), originalNode: null, node: deepest, status: "pending", price: 0, listIds: ["base"], listAttributes: {}, assignments: {} };
        data.products.push(product);
        productIndex.set(productCode, product);
        addedProducts += 1;
      } else if (existingCodesBeforeLoad.has(productCode) && !reusedCodes.has(productCode)) {
        reusedProducts += 1;
        reusedCodes.add(productCode);
      }
      product.assignments = product.assignments || {};
      product.assignments[hierarchyId] = deepest;
      assignedCodes.add(productCode);
      if (samples.assigned.length < 3) samples.assigned.push({ row: index + 2, code: productCode, node: deepest });
    }
    updateProcessingStatus(progressMessage("Cargando jerarquia y productos", index, total, "Asignando cada producto a su ruta."));
    if (index < total) setTimeout(step, 0);
    else {
      setProcessingState(false);
      done({
        addedNodes,
        assigned: assignedCodes.size,
        uniqueAssigned: assignedCodes.size,
        addedProducts,
        reusedProducts,
        duplicateRows,
        skippedNoCode,
        skippedNoNode,
        totalRows: total,
        samples
      });
    }
  };
  setTimeout(step, 0);
}

async function loadProductsFromFile(type) {
  const fileInput = $("productLoadFile");
  const config = $("loadConfig");
  const file = fileInput?.files?.[0];
  if (pendingProductLoad && $("productCodeCol")) {
    applyMappedProductLoad(type);
    return;
  }
  if (!file) {
    config.insertAdjacentHTML("beforeend", `<div class="load-result"><strong>Falta archivo</strong><br>Selecciona un Excel, CSV o TSV con productos.</div>`);
    return;
  }
  const loadOptions = {
    action: $("productListAction")?.value || (type === "newProductsLinked" ? "complement" : "new"),
    targetListId: $("loadProductList")?.value || $("loadLinkedList")?.value || "base",
    name: $("newProductListName")?.value.trim() || "",
    tableShape: $("productTableShape")?.value || "attributes"
  };
  let rows = [];
  try {
    setProcessingState(true, "Leyendo lista de productos y atributos...");
    rows = await readRowsFromFile(file);
  } catch (error) {
    setProcessingState(false);
    config.innerHTML = `<div class="load-result"><strong>No se pudo leer</strong><br>${error.message}</div>`;
    return;
  }
  updateProcessingStatus(`Archivo leido. Preparando columnas de ${rows.length} fila(s)...`);
  if (rows.length < 2) {
    setProcessingState(false);
    config.innerHTML = `<div class="load-result"><strong>No se pudo leer</strong><br>El archivo no tiene filas suficientes.</div>`;
    return;
  }
  const colCount = rows.reduce((max, row) => Math.max(max, row.length), 0);
  const headerRow = rows[0] || [];
  const bodyRows = rows.slice(1);
  pendingProductLoad = {
    type,
    fileName: file.name,
    headers: Array.from({ length: colCount }, (_, index) => headerRow[index] || `Columna ${excelColumnName(index)}`),
    rows: bodyRows,
    previewRows: bodyRows.slice(0, 9),
    totalRows: rows.length,
    colCount,
    loadOptions
  };
  setTimeout(() => {
    renderProductMapping();
    setProcessingState(false);
  }, 0);
}

function renderProductMapping() {
  const config = $("loadConfig");
  const { fileName, headers, rows, previewRows, totalRows, colCount } = pendingProductLoad;
  const tableShape = pendingProductLoad.loadOptions?.tableShape || "attributes";
  const codeSuggestion = suggestedColumn(headers, ["codigo", "codproducto", "sku", "idproducto"]);
  const descSuggestion = suggestedColumn(headers, ["descripcion", "nombre", "producto", "glosa"]);
  config.innerHTML = `
    <div class="load-flow">
      <span>1. Tipo de carga</span>
      <span class="active">2. Archivo leido</span>
      <span class="active">3. Mapear columnas</span>
      <span>4. Cargar lista</span>
    </div>
      <div class="load-result">
        <strong>Archivo leido: ${fileName}</strong><br>
      Detecte ${colCount} columna(s) y ${totalRows} fila(s) incluyendo encabezado. La primera fila se usa solo como nombre de columna.
    </div>
    <div class="excel-preview-wrap">
      <table class="excel-preview">
        <thead>
          <tr><th></th>${headers.map((_, index) => `<th>${excelColumnName(index)}</th>`).join("")}</tr>
          <tr>
            <th>Columna</th>
            ${headers.map((header, index) => `
              <th>
                <div class="excel-col-title">${header}</div>
                <select id="productRole${index}">
                  <option value="ignore">No cargar</option>
                  <option value="code">Codigo</option>
                  <option value="description">Descripcion</option>
                  <option value="attribute">Atributo</option>
                </select>
              </th>
            `).join("")}
          </tr>
        </thead>
        <tbody>
          ${previewRows.map((row, rowIndex) => `
            <tr><th>${rowIndex + 2}</th>${headers.map((_, colIndex) => `<td>${row[colIndex] || ""}</td>`).join("")}</tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    <div class="load-config">
      <div class="load-map-row">
        <strong>Producto</strong>
        <label>Codigo
          <select id="productCodeCol"></select>
        </label>
        <label>Descripcion
          <select id="productDescCol"></select>
        </label>
      </div>
    </div>
    <div class="rule-note">Marca arriba que columna es Codigo y cual es Descripcion. Abajo queda la relacion final que se cargara.</div>
  `;
  headers.forEach((_, index) => {
    if (String(index) === String(codeSuggestion)) $(`productRole${index}`).value = "code";
    else if (String(index) === String(descSuggestion)) $(`productRole${index}`).value = "description";
    else $(`productRole${index}`).value = tableShape === "attributes" ? "attribute" : "ignore";
  });
  refreshProductMappingOptions();
  if (codeSuggestion !== "") $("productCodeCol").value = String(codeSuggestion);
  if (descSuggestion !== "") $("productDescCol").value = String(descSuggestion);
  $("modalConfirm").textContent = "Cargar productos";
}

function productRoleColumnOptions(headers, role, selected = "") {
  const allowed = headers
    .map((header, index) => ({ header, index, role: $(`productRole${index}`)?.value || "ignore" }))
    .filter((col) => col.role === role);
  return [`<option value="">Sin columna</option>`]
    .concat(allowed.map((col) => `<option value="${col.index}" ${String(col.index) === String(selected) ? "selected" : ""}>${col.header || `Columna ${excelColumnName(col.index)}`}</option>`))
    .join("");
}

function refreshProductMappingOptions() {
  if (!pendingProductLoad || !$("productCodeCol")) return;
  const { headers } = pendingProductLoad;
  const codeSelect = $("productCodeCol");
  const descSelect = $("productDescCol");
  const oldCode = codeSelect.value;
  const oldDesc = descSelect.value;
  codeSelect.innerHTML = productRoleColumnOptions(headers, "code", oldCode);
  descSelect.innerHTML = productRoleColumnOptions(headers, "description", oldDesc);
}

function applyMappedProductLoad(type) {
  const startedAt = performance.now();
  const config = $("loadConfig");
  const { fileName, headers, rows } = pendingProductLoad;
  const options = pendingProductLoad.loadOptions || {};
  const action = options.action || $("productListAction")?.value || (type === "newProductsLinked" ? "complement" : "new");
  let listId = options.targetListId || $("loadProductList")?.value || $("loadLinkedList")?.value || "base";
  if (action === "new") {
    const name = options.name || $("newProductListName")?.value.trim() || pendingProductLoad.fileName.replace(/\.[^.]+$/, "");
    listId = `pl-${Date.now()}`;
    data.productLists.push({ id: listId, name, products: 0 });
  }
  const mode = action === "replace" ? "replace" : "complement";
  const codeCol = $("productCodeCol").value;
  const descCol = $("productDescCol").value;
  if (codeCol === "") {
    config.insertAdjacentHTML("beforeend", `<div class="load-result"><strong>Falta codigo</strong><br>Selecciona la columna que identifica el producto.</div>`);
    return;
  }
  const attrCols = headers
    .map((header, index) => ({ header, index, role: $(`productRole${index}`)?.value }))
    .filter((col) => col.role === "attribute" && String(col.index) !== String(codeCol) && String(col.index) !== String(descCol));
  let added = 0;
  let skipped = 0;
  let enriched = 0;
  let conflicts = 0;
  recordHistoryForLoad("cargar productos", rows.length);
  if (mode === "replace") {
    data.products.forEach((product) => {
      product.listIds = (product.listIds || []).filter((id) => id !== listId);
      if (product.listAttributes) delete product.listAttributes[listId];
    });
    data.hierarchyListLinks.splice(0, data.hierarchyListLinks.length, ...(data.hierarchyListLinks || []).filter((link) => link.listId !== listId));
  }
  processProductRows(rows, { type, listId, codeCol, descCol, attrCols, headers }, (result) => {
    setProcessingState(false);
    added = result.added;
    skipped = result.skipped;
    enriched = result.enriched;
    conflicts = result.conflicts;
    const list = data.productLists.find((item) => item.id === listId);
    if (list) list.products = result.listProductCount;
    state.activeProductListId = listId;
    addChange("Productos cargados", `${fileName}: ${added} nuevo(s), ${enriched} enriquecido(s), ${skipped} omitido(s), ${conflicts} advertencia(s).`);
    config.innerHTML = `
      <div class="load-flow">
        <span>1. Tipo de carga</span>
        <span>2. Archivo leido</span>
        <span>3. Columnas mapeadas</span>
        <span class="active">4. Lista cargada</span>
      </div>
      <div class="load-result">
        <strong>Productos cargados</strong><br>
        ${added} nuevo(s), ${enriched} enriquecido(s), ${skipped} omitido(s), ${conflicts} advertencia(s). No se duplicaron codigos.
      </div>
      <div class="load-preview">
        <div class="load-pill"><strong>${rows.length}</strong> filas revisadas</div>
        <div class="load-pill"><strong>${added}</strong> nuevos</div>
        <div class="load-pill"><strong>${conflicts}</strong> advertencias</div>
        <div class="load-pill"><strong>${((performance.now() - startedAt) / 1000).toFixed(1)}s</strong> tiempo de carga</div>
      </div>
    `;
    $("modalConfirm").textContent = "Nueva carga";
    pendingProductLoad = null;
    renderChanges();
    renderHierarchySelector();
    renderProductListSelector();
    setActionStates();
  });
}

function processProductRows(rows, settings, done) {
  let added = 0;
  let skipped = 0;
  let enriched = 0;
  let conflicts = 0;
  let index = 0;
  const total = rows.length;
  const productIndex = new Map(data.products.map((product) => [product.id, product]));
  let listProductCount = data.products.reduce((count, product) => (product.listIds || []).includes(settings.listId) ? count + 1 : count, 0);
  const attrReaders = settings.attrCols.map((col) => ({ header: col.header, index: col.index }));
  const codeIndex = Number(settings.codeCol);
  const descIndex = settings.descCol === "" ? -1 : Number(settings.descCol);
  const codeHeader = normalizeHeader(settings.headers?.[codeIndex] || "");
  const descHeader = descIndex < 0 ? "" : normalizeHeader(settings.headers?.[descIndex] || "");
  setProcessingState(true, progressMessage("Cargando productos", 0, total, "Actualizando lista; no se toca ninguna jerarquia."));
  const step = () => {
    const end = Math.min(index + 5000, total);
    for (; index < end; index += 1) {
      const row = rows[index];
      const code = cellText(row[codeIndex]);
      const desc = descIndex < 0 ? "" : cellText(row[descIndex]);
      const looksLikeHeader = codeHeader && normalizeHeader(code) === codeHeader && (!descHeader || normalizeHeader(desc) === descHeader);
      if (looksLikeHeader) {
        skipped += 1;
        continue;
      }
      if (!code) continue;
      const attrs = {};
      for (let i = 0; i < attrReaders.length; i += 1) {
        const attr = attrReaders[i];
        attrs[attr.header] = row[attr.index] || "";
      }
      let product = productIndex.get(code);
      if (!product) {
        product = { id: code, name: desc || code, originalNode: null, node: null, status: "pending", price: 0, attributes: { ...attrs }, listAttributes: { [settings.listId]: { ...attrs } }, listIds: [settings.listId], assignments: {} };
        data.products.push(product);
        productIndex.set(code, product);
        listProductCount += 1;
        added += 1;
        continue;
      }
      if (settings.type === "newProductsLinked") {
        skipped += 1;
        continue;
      }
      product.listIds = product.listIds || [];
      if (!product.listIds.includes(settings.listId)) {
        product.listIds.push(settings.listId);
        listProductCount += 1;
      }
      product.listAttributes = product.listAttributes || {};
      product.listAttributes[settings.listId] = Object.assign(product.listAttributes[settings.listId] || {}, attrs);
      product.attributes = Object.assign(product.attributes || {}, attrs);
      if (desc && product.name && product.name !== desc && normalizeHeader(product.name) !== normalizeHeader(desc)) {
        product.altNames = Array.from(new Set([...(product.altNames || []), desc]));
        conflicts += 1;
      }
      enriched += 1;
    }
    updateProcessingStatus(progressMessage("Cargando productos", index, total, "Actualizando lista; no se toca ninguna jerarquia."));
    if (index < total) {
      setTimeout(step, 0);
    } else {
      setProcessingState(false);
      done({ added, skipped, enriched, conflicts, listProductCount });
    }
  };
  setTimeout(step, 0);
}

function openExportModal() {
  openModal("Exportar", `
    <div class="rule-note">Puedes sacar estructuras limpias o enriquecidas segun el uso que necesites fuera de la app.</div>
    <div class="export-list">
      <div class="export-row">
        <div><strong>Exportar jerarquia</strong><span>Solo Linea, Sistema, Categoria y Familia, sin productos.</span></div>
        <button class="ghost-btn" data-export-kind="hierarchy">Preparar</button>
      </div>
      <div class="export-row">
        <div><strong>Exportar jerarquia enriquecida</strong><span>Jerarquia con productos asignados y atributos disponibles.</span></div>
        <button class="ghost-btn" data-export-kind="enriched">Preparar</button>
      </div>
      <div class="export-row">
        <div><strong>Exportar lista de productos</strong><span>Codigos, nombres, atributos, estados, notas e historial disponible.</span></div>
        <button class="ghost-btn" data-export-kind="products">Preparar</button>
      </div>
    </div>
  `, () => {
    addChange("Exportacion preparada", "Se preparo la configuracion de exportacion seleccionada.");
  }, { confirmText: "Cerrar", hideCancel: true });
}

function escapeCell(value) {
  return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function downloadText(filename, text, type = "application/vnd.ms-excel") {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function firebaseAvailable() {
  return !!(window.firebaseDb && window.firebaseDoc && window.firebaseSetDoc && window.firebaseGetDoc);
}

function firebaseUserLabel() {
  return firebaseUser?.email || firebaseUser?.name || "Sin sesion";
}

function firebaseUserKey() {
  return (firebaseUser?.uid || firebaseUser?.email || "anon").replace(/[^a-zA-Z0-9_-]/g, "_");
}

function requireFirebaseSession() {
  if (!firebaseAvailable()) throw new Error("Firebase no esta listo. Revisa conexion a internet o recarga la app.");
  if (!firebaseUser) throw new Error("Debes entrar con Google antes de guardar o cargar desde Firebase.");
}

function adminSnapshot() {
  return {
    schema: "catalog-admin-state-v1",
    environment: ADMIN_ENV,
    savedAt: new Date().toISOString(),
    savedBy: firebaseUserLabel(),
    activeHierarchyId: state.activeHierarchyId,
    activeProductListId: state.activeProductListId,
    changes: state.changes.slice(0, 200),
    data: {
      hierarchies: data.hierarchies,
      productLists: data.productLists,
      assistantDecisions: data.assistantDecisions || [],
      hierarchyListLinks: data.hierarchyListLinks || [],
      nodes: data.nodes,
      products: data.products
    }
  };
}

function splitText(text, size) {
  const chunks = [];
  for (let i = 0; i < text.length; i += size) chunks.push(text.slice(i, i + size));
  return chunks;
}

async function deleteCollectionDocs(collectionName, idPrefix = "") {
  const docs = await window.firebaseGetDocs(window.firebaseCollection(window.firebaseDb, collectionName));
  const items = [];
  docs.forEach((item) => {
    if (!idPrefix || item.id.startsWith(idPrefix)) items.push(item);
  });
  if (!items.length) return 0;
  const batchSize = 250;
  for (let i = 0; i < items.length; i += batchSize) {
    const batchItems = items.slice(i, i + batchSize);
    if (window.firebaseWriteBatch) {
      const batch = window.firebaseWriteBatch(window.firebaseDb);
      batchItems.forEach((item) => batch.delete(window.firebaseDoc(window.firebaseDb, collectionName, item.id)));
      await batch.commit();
    } else {
      for (const item of batchItems) {
        await window.firebaseDeleteDoc(window.firebaseDoc(window.firebaseDb, collectionName, item.id));
      }
    }
    updateProcessingStatus(`Limpiando ${collectionName}... ${Math.min(i + batchSize, items.length)}/${items.length} documento(s).`);
  }
  return items.length;
}

async function saveAdminStateToFirebaseSilent() {
  if (!firebaseReady || !firebaseUser || importInProgress || !firebaseDirty) return;
  try {
    updateAutosaveStatus("saving", "Guardando espacio compartido DEV...");
    const snapshot = adminSnapshot();
    const version = `catalog-admin-${snapshot.savedAt}`;
    const chunks = splitText(JSON.stringify(snapshot), ADMIN_CHUNK_SIZE);
    await deleteCollectionDocs(ADMIN_STATE_CHUNKS);
    for (let i = 0; i < chunks.length; i += 1) {
      await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, ADMIN_STATE_CHUNKS, chunkId(i)), {
        index: i,
        version,
        value: chunks[i],
        workspace: "shared-dev"
      });
    }
    await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, ADMIN_META_COLLECTION, ADMIN_META_DOC), {
      version,
      updatedAt: snapshot.savedAt,
      updatedBy: snapshot.savedBy,
      workspace: "shared-dev",
      environment: ADMIN_ENV,
      schema: snapshot.schema,
      chunksCollection: ADMIN_STATE_CHUNKS,
      chunkPrefix: "",
      chunks: chunks.length,
      chunkSize: ADMIN_CHUNK_SIZE,
      hierarchies: data.hierarchies.length,
      nodes: data.nodes.length,
      products: data.products.length,
      productLists: data.productLists.length,
      hierarchyListLinks: (data.hierarchyListLinks || []).length
    });
    firebaseDirty = false;
    updateAutosaveStatus("saved", `Espacio compartido DEV guardado. Ultima sincronizacion ${new Date().toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" })}.`);
  } catch (error) {
    firebaseDirty = true;
    updateAutosaveStatus("error", `No se pudo guardar el espacio compartido DEV: ${error.message || error}`);
  }
}

async function saveAdminStateToFirebase({ createVersion = false } = {}) {
  try {
    requireFirebaseSession();
    setProcessingState(true, createVersion ? "Creando version del espacio compartido DEV..." : "Guardando espacio compartido DEV...");
    const snapshot = adminSnapshot();
    const version = `catalog-admin-${snapshot.savedAt}`;
    const json = JSON.stringify(snapshot);
    const chunks = splitText(json, ADMIN_CHUNK_SIZE);
    await deleteCollectionDocs(ADMIN_STATE_CHUNKS);
    for (let i = 0; i < chunks.length; i += 1) {
      await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, ADMIN_STATE_CHUNKS, chunkId(i)), {
        index: i,
        version,
        value: chunks[i],
        workspace: "shared-dev"
      });
      updateProcessingStatus(`Guardando espacio compartido DEV... ${i + 1}/${chunks.length} chunk(s).`);
    }
    const meta = {
      version,
      updatedAt: snapshot.savedAt,
      updatedBy: snapshot.savedBy,
      environment: ADMIN_ENV,
      schema: snapshot.schema,
      chunksCollection: ADMIN_STATE_CHUNKS,
      chunkPrefix: "",
      workspace: "shared-dev",
      chunks: chunks.length,
      chunkSize: ADMIN_CHUNK_SIZE,
      hierarchies: data.hierarchies.length,
      nodes: data.nodes.length,
      products: data.products.length,
      productLists: data.productLists.length,
      hierarchyListLinks: (data.hierarchyListLinks || []).length
    };
    await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, ADMIN_META_COLLECTION, ADMIN_META_DOC), meta);
    await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, ADMIN_AUDIT, `log-${Date.now()}`), {
      action: createVersion ? "create_version" : "save_state",
      environment: ADMIN_ENV,
      version,
      createdAt: snapshot.savedAt,
      createdBy: snapshot.savedBy,
      counts: meta
    });
    if (createVersion) {
      await window.firebaseSetDoc(window.firebaseDoc(window.firebaseDb, ADMIN_VERSIONS, version.replace(/[^a-zA-Z0-9_-]/g, "_")), {
        ...meta,
        snapshot
      });
    }
    setProcessingState(false);
    addChange(createVersion ? "Version DEV creada" : "Espacio compartido DEV guardado", `${meta.products} producto(s), ${meta.nodes} nodo(s), ${meta.chunks} chunk(s).`);
    renderAll();
  } catch (error) {
    showLoadError("No se pudo guardar en Firebase", error);
  }
}

async function loadAdminStateFromFirebase() {
  try {
    requireFirebaseSession();
    setProcessingState(true, "Leyendo metadata DEV desde Firebase...");
    const metaSnap = await window.firebaseGetDoc(window.firebaseDoc(window.firebaseDb, ADMIN_META_COLLECTION, ADMIN_META_DOC));
    if (!metaSnap.exists()) throw new Error("No existe config_dev/catalog_admin_meta todavia.");
    const meta = metaSnap.data();
    const parts = [];
    for (let i = 0; i < meta.chunks; i += 1) {
      const snap = await window.firebaseGetDoc(window.firebaseDoc(window.firebaseDb, meta.chunksCollection || ADMIN_STATE_CHUNKS, `${meta.chunkPrefix || ""}${chunkId(i)}`));
      if (!snap.exists()) throw new Error(`Falta chunk ${chunkId(i)} en Firebase.`);
      const chunk = snap.data();
      if (chunk.version !== meta.version) throw new Error(`El chunk ${chunkId(i)} tiene otra version.`);
      parts.push(chunk.value || "");
      updateProcessingStatus(`Cargando estado DEV... ${i + 1}/${meta.chunks} chunk(s).`);
    }
    const payload = JSON.parse(parts.join(""));
    applySavedCatalogState(payload);
    normalizeProductSources();
    data.hierarchies.forEach((hierarchy) => consolidateEquivalentNodes(hierarchy.id));
    state.selectedNode = null;
    state.selectedProduct = null;
    state.selectedProducts.clear();
    invalidateRenderCache();
    setProcessingState(false);
    addChange("Espacio compartido DEV cargado", `Version ${meta.version} cargada desde Firebase.`);
    markDataDirty();
    renderAll();
  } catch (error) {
    showLoadError("No se pudo cargar desde Firebase", error);
  }
}

async function loadAdminStateFromFirebaseSilent() {
  if (!firebaseReady || !firebaseUser || dataDirty || importInProgress) return;
  try {
    updateAutosaveStatus("saving", "Recuperando espacio compartido DEV...");
    const metaSnap = await window.firebaseGetDoc(window.firebaseDoc(window.firebaseDb, ADMIN_META_COLLECTION, ADMIN_META_DOC));
    if (!metaSnap.exists()) {
      updateAutosaveStatus("saved", "No hay espacio compartido DEV previo. Se usara el estado local.");
      return;
    }
    const meta = metaSnap.data();
    const parts = [];
    for (let i = 0; i < meta.chunks; i += 1) {
      const snap = await window.firebaseGetDoc(window.firebaseDoc(window.firebaseDb, meta.chunksCollection || ADMIN_STATE_CHUNKS, `${meta.chunkPrefix || ""}${chunkId(i)}`));
      if (!snap.exists()) throw new Error(`Falta chunk ${chunkId(i)} en Firebase.`);
      const chunk = snap.data();
      if (chunk.version !== meta.version) throw new Error(`El chunk ${chunkId(i)} tiene otra version.`);
      parts.push(chunk.value || "");
    }
    applySavedCatalogState(JSON.parse(parts.join("")));
    normalizeProductSources();
    data.hierarchies.forEach((hierarchy) => consolidateEquivalentNodes(hierarchy.id));
    state.selectedNode = null;
    state.selectedProduct = null;
    state.selectedProducts.clear();
    state.expandedNodes = new Set(activeNodes().filter((node) => node.level < 1).map((node) => node.id));
    dataDirty = false;
    firebaseDirty = false;
    updateAutosaveStatus("saved", `Espacio compartido DEV recuperado. Ultima sincronizacion ${new Date(meta.updatedAt || Date.now()).toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" })}.`);
    renderAll();
  } catch (error) {
    updateAutosaveStatus("error", `No se pudo recuperar el espacio DEV: ${error.message || error}`);
  }
}

async function loginFirebase() {
  try {
    if (!firebaseAvailable() || !window.firebaseSignIn) throw new Error("Firebase Auth no esta listo.");
    if (firebaseUser && window.firebaseSignOut) await window.firebaseSignOut();
    else await window.firebaseSignIn();
  } catch (error) {
    await new Promise((resolve) => setTimeout(resolve, 350));
    const authenticatedUser = firebaseUser || window.catalogAdminFirebaseUser || window.firebaseAuth?.currentUser;
    if (authenticatedUser) {
      firebaseUser = firebaseUser || {
        uid: authenticatedUser.uid,
        email: authenticatedUser.email,
        name: authenticatedUser.displayName || authenticatedUser.name || authenticatedUser.email || "Usuario"
      };
      setActionStates();
      return;
    }
    openModal("Sesion Firebase", `<div class="load-error"><strong>No se pudo iniciar sesion</strong><span>${error.message}</span></div>`, () => {}, { confirmText: "Aceptar", hideCancel: true });
  }
}

function hierarchyExportRows(includeProducts = false) {
  const rows = [["Jerarquia", "Nivel", "Codigo", "Nombre", "Padre", "Ruta"]];
  activeNodes().forEach((node) => {
    rows.push([activeHierarchy().name, levelNames[node.level], node.code || "", node.name, node.parent || "", pathFor(node.id).map((n) => n.name).join(" > ")]);
  });
  if (includeProducts) {
    rows.push([]);
    const linkedIds = activeHierarchyLinkedListIds();
    const attrHeaders = Array.from(new Set(data.products.flatMap((product) => linkedIds.flatMap((listId) => Object.keys(productListAttributes(product, listId))))));
    rows.push(["Codigo producto", "Descripcion", "Nodo", "Ruta", "Estado clasificacion", ...attrHeaders]);
    visibleProducts().forEach((product) => {
      const nodeId = productNode(product);
      const attrs = Object.assign({}, ...linkedIds.map((listId) => productListAttributes(product, listId)));
      rows.push([product.id, product.name, nodeId || "", nodeId ? pathFor(nodeId).map((n) => n.name).join(" > ") : "", nodeId ? "Clasificado" : "No clasificado", ...attrHeaders.map((header) => attrs[header] || "")]);
    });
  }
  return rows;
}

function exportRows(filename, rows) {
  const html = `<table>${rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeCell(cell)}</td>`).join("")}</tr>`).join("")}</table>`;
  downloadText(filename, html);
}

function exportCurrent(kind) {
  if (kind === "hierarchy") exportRows(`${activeHierarchy().name}-jerarquia.xls`, hierarchyExportRows(false));
  if (kind === "enriched") exportRows(`${activeHierarchy().name}-jerarquia-enriquecida.xls`, hierarchyExportRows(true));
  if (kind === "products") {
    const attrHeaders = Array.from(new Set(data.products.flatMap((product) => Object.values(product.listAttributes || {}).flatMap((attrs) => Object.keys(attrs)))));
    exportRows(`productos.xls`, [["Codigo", "Descripcion", "Listas", "Estado", ...attrHeaders]].concat(data.products.map((p) => {
      const attrs = Object.assign({}, ...Object.values(p.listAttributes || {}));
      return [p.id, p.name, (p.listIds || []).join(", "), p.status, ...attrHeaders.map((header) => attrs[header] || "")];
    })));
  }
  addChange("Exportacion generada", `Se genero archivo ${kind}.`);
  renderChanges();
}

function chunkArray(items, size) {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) chunks.push(items.slice(i, i + size));
  return chunks;
}

function chunkId(index) {
  return String(index).padStart(4, "0");
}

function catalogMasterRoutes(env = "dev") {
  if (env === "prod") {
    return {
      chunksCollection: "catalog_master_chunks",
      metaCollection: "config_prod",
      metaDoc: "catalog_master_meta",
      duplicatesDoc: "catalog_master_duplicates"
    };
  }
  return {
    chunksCollection: "catalog_master_chunks_dev",
    metaCollection: "config_dev",
    metaDoc: "catalog_master_meta",
    duplicatesDoc: "catalog_master_duplicates"
  };
}

function catalogViewsRoutes(env = "dev") {
  if (env === "prod") {
    return {
      metaCollection: "config_prod",
      metaDoc: "catalog_views_meta",
      duplicatesDoc: "catalog_views_duplicates",
      views: {
        old: "catalog_view_old_chunks",
        new: "catalog_view_new_chunks"
      }
    };
  }
  return {
    metaCollection: "config_dev",
    metaDoc: "catalog_views_meta",
    duplicatesDoc: "catalog_views_duplicates",
    views: {
      old: "catalog_view_old_chunks_dev",
      new: "catalog_view_new_chunks_dev"
    }
  };
}

function hierarchyOptionsForPublish(selectedId = "") {
  return data.hierarchies
    .map((hierarchy) => `<option value="${hierarchy.id}" ${hierarchy.id === selectedId ? "selected" : ""}>${hierarchy.name}</option>`)
    .join("");
}

function productNodeForHierarchy(product, hierarchyId) {
  return product.assignments?.[hierarchyId] || (hierarchyId === "v16" ? product.originalNode : product.node);
}

function linkedListIdsForHierarchy(hierarchyId) {
  return (data.hierarchyListLinks || [])
    .filter((link) => link.hierarchyId === hierarchyId)
    .map((link) => link.listId);
}

function isProductLinkedToHierarchy(product, hierarchyId) {
  const linkedIds = linkedListIdsForHierarchy(hierarchyId);
  return linkedIds.some((listId) => (product.listIds || []).includes(listId));
}

function normalizeHierarchyNodeOrders(hierarchyId) {
  const groups = new Map();
  data.nodes
    .filter((node) => nodeHierarchy(node) === hierarchyId)
    .forEach((node) => {
      const key = node.parent || "";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(node);
    });
  groups.forEach((siblings) => {
    siblings
      .sort(compareNodeOrder)
      .forEach((node, index) => {
        node.order = (index + 1) * 10;
      });
  });
  invalidateRenderCache();
}

function nextNodeOrder(hierarchyId, parentId, excludeId = "") {
  const siblings = data.nodes.filter((node) => nodeHierarchy(node) === hierarchyId && (node.parent || "") === (parentId || "") && node.id !== excludeId);
  if (!siblings.length) return 10;
  return Math.max(...siblings.map((node) => Number(node.order) || 0)) + 10;
}

function publishedNodesForHierarchy(hierarchyId) {
  normalizeHierarchyNodeOrders(hierarchyId);
  const nodes = data.nodes
    .filter((node) => nodeHierarchy(node) === hierarchyId)
    .map((node) => ({
      id: node.id,
      name: node.name,
      code: cellText(node.code || ""),
      level: node.level,
      parentId: node.parent || null,
      order: Number(node.order) || 999998
    }))
    .sort((a, b) => {
      if ((a.parentId || "") !== (b.parentId || "")) return String(a.parentId || "").localeCompare(String(b.parentId || ""));
      return a.order - b.order;
    });
  nodes.push({
    id: UNCLASSIFIED_NODE_ID,
    name: "No clasificados",
    code: "",
    level: 0,
    parentId: null,
    order: 999999,
    virtual: true
  });
  return nodes;
}

function buildCatalogViewPayload({ env = "dev", viewId, label, hierarchyId, chunksCollection, chunkSize = 250, updatedBy = "Administrador", versionStamp = new Date().toISOString() } = {}) {
  const hierarchy = data.hierarchies.find((item) => item.id === hierarchyId);
  if (!hierarchy) throw new Error(`No existe la jerarquia seleccionada para ${label}.`);
  const version = `${viewId}-${versionStamp}`;
  const publishedNodes = publishedNodesForHierarchy(hierarchyId);
  const productsByCode = new Map();
  const duplicates = [];
  const withoutCode = [];
  const unclassified = [];
  data.products.forEach((product) => {
    const cod = cellText(product.id);
    if (!cod) {
      withoutCode.push(product.name || "");
      return;
    }
    const nodeId = productNodeForHierarchy(product, hierarchyId);
    const node = nodeId ? nodeById()[nodeId] : null;
    if (!node || nodeHierarchy(node) !== hierarchyId) {
      if (!isProductLinkedToHierarchy(product, hierarchyId)) return;
      unclassified.push(cod);
      const item = {
        id: `prod-${String(productsByCode.size + 1).padStart(5, "0")}-${cod}`,
        cod,
        nom: product.name || "",
        groups: ["No clasificados"],
        cat1: "No clasificados",
        cat2: "",
        nodeId: UNCLASSIFIED_NODE_ID,
        groupNodeIds: [UNCLASSIFIED_NODE_ID],
        groupOrder: [999999],
        unclassified: true
      };
      if (productsByCode.has(cod)) {
        duplicates.push({ cod, kept: productsByCode.get(cod), duplicate: item });
        return;
      }
      productsByCode.set(cod, item);
      return;
    }
    const path = pathFor(nodeId);
    const groups = path.map((item) => item.name);
    const groupNodeIds = path.map((item) => item.id);
    const groupOrder = path.map((item) => Number(item.order) || 999998);
    const item = {
      id: `prod-${String(productsByCode.size + 1).padStart(5, "0")}-${cod}`,
      cod,
      nom: product.name || "",
      groups,
      cat1: groups[0] || "",
      cat2: groups[1] || "",
      nodeId,
      groupNodeIds,
      groupOrder,
      unclassified: false
    };
    if (productsByCode.has(cod)) {
      duplicates.push({ cod, kept: productsByCode.get(cod), duplicate: item });
      return;
    }
    productsByCode.set(cod, item);
  });
  const products = [...productsByCode.values()];
  const chunks = chunkArray(products, chunkSize).map((value, index) => ({
    id: chunkId(index),
    path: `${chunksCollection}/${chunkId(index)}`,
    data: { index, version, value }
  }));
  const meta = {
    version,
    updatedAt: versionStamp,
    updatedBy,
    sourceApp: "catalog-admin",
    sourceHierarchyId: hierarchy.id,
    sourceHierarchyName: hierarchy.name,
    schema: "catalog-view-v1",
    viewId,
    label,
    chunksCollection,
    nodes: publishedNodes,
    count: products.length,
    chunks: chunks.length,
    chunkSize,
    totalRows: data.products.length,
    loaded: products.length,
    withoutCode: withoutCode.length,
    repeatedCodes: duplicates.length,
    repeatedRows: duplicates.length,
    invalidRows: withoutCode.length + unclassified.length,
    unclassified: unclassified.length
  };
  const duplicateReport = { version, updatedAt: meta.updatedAt, count: duplicates.length, items: duplicates };
  return { viewId, label, hierarchy, chunksCollection, meta, chunks, duplicates: duplicateReport, unclassifiedSample: unclassified.slice(0, 50) };
}

function viewMetaEntry(view) {
  return {
    id: view.viewId,
    label: view.label,
    chunksCollection: view.chunksCollection,
    version: view.meta.version,
    chunks: view.meta.chunks,
    count: view.meta.count,
    chunkSize: view.meta.chunkSize,
    sourceHierarchyId: view.meta.sourceHierarchyId,
    sourceHierarchyName: view.meta.sourceHierarchyName,
    nodes: view.meta.nodes,
    unclassified: view.meta.unclassified,
    repeatedCodes: view.meta.repeatedCodes
  };
}

function buildCatalogViewsPackagePayload({ env = "dev", oldHierarchyId = "", newHierarchyId = "", chunkSize = 250, updatedBy = "Administrador" } = {}) {
  const routes = catalogViewsRoutes(env);
  const versionStamp = new Date().toISOString();
  const version = `catalog-views-${versionStamp}`;
  const views = [];
  if (oldHierarchyId) {
    views.push(buildCatalogViewPayload({
      env,
      viewId: "old",
      label: "Catalogo Antiguo",
      hierarchyId: oldHierarchyId,
      chunksCollection: routes.views.old,
      chunkSize,
      updatedBy,
      versionStamp
    }));
  }
  if (newHierarchyId) {
    views.push(buildCatalogViewPayload({
      env,
      viewId: "new",
      label: "Catalogo Nuevo",
      hierarchyId: newHierarchyId,
      chunksCollection: routes.views.new,
      chunkSize,
      updatedBy,
      versionStamp
    }));
  }
  if (!views.length) throw new Error("Selecciona al menos una vista para publicar.");
  const newView = views.find((view) => view.viewId === "new");
  const meta = {
    version,
    updatedAt: versionStamp,
    updatedBy,
    sourceApp: "catalog-admin",
    schema: "catalog-views-v1",
    views: views.map(viewMetaEntry),
    compatibility: newView ? {
      copiedFromView: "new",
      metaPath: `${catalogMasterRoutes(env).metaCollection}/${catalogMasterRoutes(env).metaDoc}`,
      chunksCollection: catalogMasterRoutes(env).chunksCollection
    } : null
  };
  return {
    env,
    routes,
    metaPath: `${routes.metaCollection}/${routes.metaDoc}`,
    duplicatesPath: `${routes.metaCollection}/${routes.duplicatesDoc}`,
    meta,
    views,
    duplicates: {
      version,
      updatedAt: versionStamp,
      views: views.map((view) => ({
        id: view.viewId,
        label: view.label,
        count: view.duplicates.count,
        items: view.duplicates.items
      }))
    },
    legacyMaster: newView ? buildLegacyMasterPayloadFromView(newView, env) : null
  };
}

function buildLegacyMasterPayloadFromView(view, env = "dev") {
  const routes = catalogMasterRoutes(env);
  const meta = {
    ...view.meta,
    schema: "catalog-master-v1",
    chunksCollection: routes.chunksCollection
  };
  const chunks = view.chunks.map((chunk) => ({
    id: chunk.id,
    path: `${routes.chunksCollection}/${chunk.id}`,
    data: { ...chunk.data }
  }));
  return {
    env,
    routes,
    metaPath: `${routes.metaCollection}/${routes.metaDoc}`,
    duplicatesPath: `${routes.metaCollection}/${routes.duplicatesDoc}`,
    chunksCollection: routes.chunksCollection,
    meta,
    chunks,
    duplicates: view.duplicates,
    unclassifiedSample: view.unclassifiedSample
  };
}

function buildCatalogMasterPayload({ env = "dev", chunkSize = 250, updatedBy = "Administrador" } = {}) {
  const hierarchy = activeHierarchy();
  const routes = catalogMasterRoutes(env);
  const view = buildCatalogViewPayload({
    env,
    viewId: "master",
    label: "Maestro FitFlow",
    hierarchyId: hierarchy.id,
    chunksCollection: routes.chunksCollection,
    chunkSize,
    updatedBy,
    versionStamp: new Date().toISOString()
  });
  return buildLegacyMasterPayloadFromView(view, env);
}

async function writeCatalogMasterToFirestore(payload) {
  if (!(window.firebaseDb && window.firebaseDoc && window.firebaseSetDoc)) return false;
  if (!firebaseUser) throw new Error("Debes entrar con Google antes de publicar en Firestore.");
  const db = window.firebaseDb;
  updateProcessingStatus(`Limpiando chunks anteriores en ${payload.routes.chunksCollection}...`);
  await firebaseStep(deleteCollectionDocs(payload.routes.chunksCollection), "limpiar chunks anteriores", 180000);
  updateProcessingStatus(`Guardando metadata en ${payload.routes.metaCollection}/${payload.routes.metaDoc}...`);
  await firebaseStep(window.firebaseSetDoc(window.firebaseDoc(db, payload.routes.metaCollection, payload.routes.metaDoc), payload.meta), "guardar metadata");
  updateProcessingStatus(`Guardando reporte de duplicados en ${payload.routes.metaCollection}/${payload.routes.duplicatesDoc}...`);
  await firebaseStep(window.firebaseSetDoc(window.firebaseDoc(db, payload.routes.metaCollection, payload.routes.duplicatesDoc), payload.duplicates), "guardar duplicados");
  for (let i = 0; i < payload.chunks.length; i += 1) {
    const chunk = payload.chunks[i];
    updateProcessingStatus(`Publicando maestro FitFlow DEV... ${i + 1}/${payload.chunks.length} chunk(s).`);
    await firebaseStep(window.firebaseSetDoc(window.firebaseDoc(db, payload.routes.chunksCollection, chunk.id), chunk.data), `publicar chunk ${chunk.id}`);
  }
  return true;
}

async function writeCatalogViewsToFirestore(payload) {
  if (!(window.firebaseDb && window.firebaseDoc && window.firebaseSetDoc)) return false;
  if (!firebaseUser) throw new Error("Debes entrar con Google antes de publicar en Firestore.");
  const db = window.firebaseDb;
  for (const view of payload.views) {
    updateProcessingStatus(`Limpiando ${view.label} en ${view.chunksCollection}...`);
    await firebaseStep(deleteCollectionDocs(view.chunksCollection), `limpiar ${view.label}`, 180000);
    for (let i = 0; i < view.chunks.length; i += 1) {
      const chunk = view.chunks[i];
      updateProcessingStatus(`Publicando ${view.label}... ${i + 1}/${view.chunks.length} chunk(s).`);
      await firebaseStep(window.firebaseSetDoc(window.firebaseDoc(db, view.chunksCollection, chunk.id), chunk.data), `publicar ${view.label} chunk ${chunk.id}`);
    }
  }
  const publishedIds = new Set(payload.views.map((view) => view.viewId));
  if (window.firebaseGetDoc) {
    try {
      const currentSnap = await firebaseStep(window.firebaseGetDoc(window.firebaseDoc(db, payload.routes.metaCollection, payload.routes.metaDoc)), "leer metadata actual");
      if (currentSnap.exists()) {
        const currentMeta = currentSnap.data();
        const preservedViews = (currentMeta.views || []).filter((view) => !publishedIds.has(view.id));
        payload.meta.views = [...preservedViews, ...payload.meta.views].sort((a, b) => String(a.id).localeCompare(String(b.id)));
      }
    } catch (error) {
      logLoad("metadata previa no leida", error.message || error);
    }
  }
  updateProcessingStatus(`Guardando metadata de vistas en ${payload.metaPath}...`);
  await firebaseStep(window.firebaseSetDoc(window.firebaseDoc(db, payload.routes.metaCollection, payload.routes.metaDoc), payload.meta), "guardar metadata de vistas");
  updateProcessingStatus(`Guardando reporte de duplicados en ${payload.duplicatesPath}...`);
  await firebaseStep(window.firebaseSetDoc(window.firebaseDoc(db, payload.routes.metaCollection, payload.routes.duplicatesDoc), payload.duplicates), "guardar duplicados de vistas");
  if (payload.legacyMaster) {
    updateProcessingStatus("Actualizando compatibilidad catalog_master para FitFlow actual...");
    await writeCatalogMasterToFirestore(payload.legacyMaster);
  }
  return true;
}

function firebaseStep(promise, label, timeoutMs = 45000) {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = window.setTimeout(() => reject(new Error(`Firebase no respondio al ${label} despues de ${Math.round(timeoutMs / 1000)}s.`)), timeoutMs);
  });
  return Promise.race([promise, timeout]).finally(() => window.clearTimeout(timeoutId));
}

function publishPreviewForView(viewId) {
  const checkbox = $(viewId === "publishOldHierarchy" ? "publishOldEnabled" : "publishNewEnabled");
  const target = $(`${viewId}Preview`);
  if (checkbox && !checkbox.checked) {
    if (target) target.textContent = "No se publicara en esta ejecucion";
    return;
  }
  const hierarchyId = $(viewId)?.value;
  if (!hierarchyId) return;
  try {
    const view = buildCatalogViewPayload({
      viewId: viewId === "publishOldHierarchy" ? "old" : "new",
      label: viewId === "publishOldHierarchy" ? "Catalogo Antiguo" : "Catalogo Nuevo",
      hierarchyId,
      chunksCollection: viewId === "publishOldHierarchy" ? "catalog_view_old_chunks_dev" : "catalog_view_new_chunks_dev"
    });
    if (target) target.textContent = `${view.meta.count} productos, ${view.meta.chunks} chunks, ${view.meta.unclassified} no clasificados`;
  } catch (error) {
    if (target) target.textContent = "No se pudo calcular esta vista";
  }
}

async function publishToFirebase() {
  if (!canPublishDev()) {
    openModal("Publicar DEV", `<div class="load-error"><strong>Sin permiso para publicar</strong><span>Necesitas rol Admin u Owner para publicar vistas FitFlow DEV.</span></div>`, () => {}, { confirmText: "Aceptar", hideCancel: true });
    return;
  }
  const activeId = activeHierarchy().id;
  const other = data.hierarchies.find((hierarchy) => hierarchy.id !== activeId);
  const oldSelected = other?.id || activeId;
  const newSelected = activeId;
  const runPublishViews = async ({ oldHierarchyId = "", newHierarchyId = "" } = {}) => {
    if (!oldHierarchyId && !newHierarchyId) throw new Error("Selecciona al menos una vista para publicar.");
    if (oldHierarchyId && newHierarchyId && oldHierarchyId === newHierarchyId) throw new Error("Catalogo Antiguo y Catalogo Nuevo deben usar jerarquias distintas.");
    const payload = buildCatalogViewsPackagePayload({ env: "dev", oldHierarchyId, newHierarchyId, chunkSize: 250 });
    setProcessingState(true, "Preparando vistas FitFlow DEV...");
    await new Promise((resolve) => window.setTimeout(resolve, 0));
    const wrote = await writeCatalogViewsToFirestore(payload);
    setProcessingState(false);
    if (wrote) {
      addChange("Vistas FitFlow publicadas", `${payload.meta.views.map((view) => `${view.label}: ${view.count}`).join(" | ")} producto(s), version ${payload.meta.version}.`);
    } else {
      downloadText(`catalog_views_firestore_dev_${payload.meta.version}.json`, JSON.stringify(payload, null, 2), "application/json");
      addChange("Vistas FitFlow preparadas", "No hay conexion Firestore activa en esta pantalla; se descargo un JSON con meta, chunks y duplicados.");
    }
    closeModal();
  };
  const confirmPublishViews = ({ kind, oldHierarchyId = "", newHierarchyId = "" }) => {
    const oldHierarchy = oldHierarchyId ? data.hierarchies.find((hierarchy) => hierarchy.id === oldHierarchyId) : null;
    const newHierarchy = newHierarchyId ? data.hierarchies.find((hierarchy) => hierarchy.id === newHierarchyId) : null;
    const title = kind === "old" ? "Confirmar Catalogo Antiguo" : kind === "new" ? "Confirmar Catalogo Nuevo" : "Confirmar ambas vistas";
    const message = kind === "old"
      ? `Se reemplazara solo la vista Catálogo Antiguo usando "${oldHierarchy?.name || ""}". Catálogo Nuevo y catalog_master se mantienen como estan.`
      : kind === "new"
        ? `Se reemplazara la vista Catálogo Nuevo usando "${newHierarchy?.name || ""}". Tambien se actualizara el respaldo compatible catalog_master.`
        : `Se reemplazaran Catálogo Antiguo con "${oldHierarchy?.name || ""}" y Catálogo Nuevo con "${newHierarchy?.name || ""}". Tambien se actualizara el respaldo compatible catalog_master desde Catálogo Nuevo.`;
    openModal(title, `
      <div class="load-error">
        <strong>Antes de publicar</strong>
        <span>${message}</span>
      </div>
      <div class="rule-note">
        Esta accion escribe en Firebase DEV. FitFlow leera la nueva version publicada por codigo exacto.
      </div>
    `, async () => {
      try {
        await runPublishViews({ oldHierarchyId, newHierarchyId });
      } catch (error) {
        setProcessingState(false);
        showLoadError("No se pudo publicar", error);
      }
    }, { confirmText: "Confirmar publicacion", keepOpen: true });
  };
  openModal("Publicar vistas FitFlow DEV", `
    <div class="rule-note">
      FitFlow seguira usando su catalogo operativo de precios y stock. Desde aqui se publican solo las ubicaciones de producto
      por codigo: <strong>config_dev/catalog_views_meta</strong> y los chunks de cada vista.
    </div>
    <div class="publish-steps">
      <div class="publish-step">
        <strong>Catalogo Antiguo</strong>
        <span>Elige la jerarquia que FitFlow usara como vista antigua.</span>
        <select id="publishOldHierarchy">${hierarchyOptionsForPublish(oldSelected)}</select>
        <small id="publishOldHierarchyPreview"></small>
        <button class="ghost-btn" id="publishOldNowBtn" type="button">Publicar Antiguo</button>
      </div>
      <div class="publish-step">
        <strong>Catalogo Nuevo</strong>
        <span>Elige la jerarquia que FitFlow usara como vista nueva. Esta tambien actualiza la ruta compatible actual.</span>
        <select id="publishNewHierarchy">${hierarchyOptionsForPublish(newSelected)}</select>
        <small id="publishNewHierarchyPreview"></small>
        <button class="ghost-btn" id="publishNewNowBtn" type="button">Publicar Nuevo</button>
      </div>
    </div>
    <div class="rule-note">
      El campo <strong>cod</strong> se publica como texto exacto usando solo trim(). No se convierten numeros ni se alteran ceros a la izquierda.
    </div>
  `, async () => {
    try {
      confirmPublishViews({ kind: "both", oldHierarchyId: $("publishOldHierarchy")?.value, newHierarchyId: $("publishNewHierarchy")?.value });
    } catch (error) {
      setProcessingState(false);
      showLoadError("No se pudieron publicar vistas FitFlow DEV", error);
    }
  }, { confirmText: "Publicar ambas", keepOpen: true });
  ["publishOldHierarchy", "publishNewHierarchy"].forEach((id) => {
    const select = $(id);
    if (select) {
      select.addEventListener("change", () => publishPreviewForView(id));
      publishPreviewForView(id);
    }
  });
  $("publishOldNowBtn")?.addEventListener("click", async () => {
    try {
      confirmPublishViews({ kind: "old", oldHierarchyId: $("publishOldHierarchy")?.value });
    } catch (error) {
      setProcessingState(false);
      showLoadError("No se pudo publicar Catalogo Antiguo", error);
    }
  });
  $("publishNewNowBtn")?.addEventListener("click", async () => {
    try {
      confirmPublishViews({ kind: "new", newHierarchyId: $("publishNewHierarchy")?.value });
    } catch (error) {
      setProcessingState(false);
      showLoadError("No se pudo publicar Catalogo Nuevo", error);
    }
  });
}

const classificationLexicon = {
  material: {
    "PVC": ["pvc"],
    "CPVC": ["cpvc", "aquatherm"],
    "HDPE": ["hdpe", "pead", "polietileno alta densidad"],
    "Polietileno": ["polietileno", "poliet", "poly"],
    "PPR": ["ppr", "polipropileno random"],
    "Bronce": ["bronce", "bronze"],
    "Cobre": ["cobre", "cu"],
    "Acero inoxidable": ["inox", "inoxidable", "aisi 304", "aisi 316"],
    "Acero carbono": ["acero carbono", "ac carbono"],
    "Fierro fundido": ["fierro fundido", "hierro fundido", "fundicion"],
    "Galvanizado": ["galv", "galvanizado"],
    "Plastico": ["plastico", "polipropileno", "pp"]
  },
  piece: {
    "Codo": ["codo", "curva"],
    "Tee": ["tee", "te ", "te reduccion"],
    "Copla": ["copla", "cupla", "manguito"],
    "Reduccion": ["reduccion", "reductor", "buje reduccion"],
    "Terminal": ["terminal"],
    "Tuberia": ["tuberia", "tubo", "caneria"],
    "Valvula": ["valvula", "llave"],
    "Filtro": ["filtro"],
    "Flotador": ["flotador"],
    "Collarin": ["collarin", "collar arranque", "abrazadera"],
    "Brida": ["brida", "flange"],
    "Niple": ["niple", "nipple"],
    "Tapon": ["tapon", "tapagorro"],
    "Union": ["union americana", "union universal"],
    "Adaptador": ["adaptador", "terminal adaptador"],
    "Cruz": ["cruz", "cruceta"],
    "Bomba": ["bomba", "motobomba"],
    "Aspersor": ["aspersor", "microaspersor", "gotero", "emisor"]
  },
  connection: {
    "Rosca interior": ["hi ", "hilo interior", "rosca interior", "hembra"],
    "Rosca exterior": ["he ", "hilo exterior", "rosca exterior", "macho"],
    "Soldar": ["soldar", "soldable"],
    "Cementar": ["cementar", "cementado", "cementar"],
    "Electrofusion": ["electrofusion", "electrofusion"],
    "Termofusion": ["termofusion"],
    "Compresion": ["compresion", "compression"],
    "Espiga": ["espiga", "insert"]
  },
  system: {
    "Hidraulico a presion": ["hidraul", "presion", "c-6", "c-10", "c-16"],
    "Sanitario": ["sanitario", "alcantarill", "colector", "desague"],
    "Riego": ["riego", "aspersor", "gotero", "emisor", "layflat"],
    "Bombeo": ["bomba", "bombeo", "centrifuga", "sumergible", "achique"],
    "Piscinas": ["piscina", "spa", "jacuzzi"],
    "Gas": ["gas", "glp"],
    "Electrico": ["conduit", "electrico", "halogen", "canaleta"]
  }
};

const classificationStopWords = new Set([
  "de", "del", "la", "el", "los", "las", "para", "con", "sin", "por", "tipo", "x", "mm", "mt", "mts", "un", "una"
]);

function classificationText(value) {
  return cellText(value)
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function classificationTokens(value) {
  return classificationText(value).split(" ").filter((token) => token.length > 1 && !classificationStopWords.has(token));
}

function extractClassificationProfile(value) {
  const text = ` ${classificationText(value)} `;
  const profile = { material: [], piece: [], connection: [], system: [], tokens: classificationTokens(text) };
  Object.entries(classificationLexicon).forEach(([kind, values]) => {
    Object.entries(values).forEach(([label, aliases]) => {
      if (aliases.some((alias) => text.includes(` ${classificationText(alias)} `) || text.includes(classificationText(alias)))) {
        profile[kind].push(label);
      }
    });
  });
  if (text.includes(" gris ") || text.includes(" colector ")) profile.system.push("Sanitario");
  if (text.includes(" blanco ") && !profile.system.length) profile.system.push("Sanitario");
  if (profile.connection.some((item) => ["Electrofusion", "Termofusion"].includes(item)) && !profile.material.includes("HDPE")) {
    profile.material.push("HDPE");
  }
  Object.keys(profile).forEach((key) => {
    if (Array.isArray(profile[key])) profile[key] = [...new Set(profile[key])];
  });
  return profile;
}

function mergeClassificationProfiles(products) {
  const counts = { material: new Map(), piece: new Map(), connection: new Map(), system: new Map(), tokens: new Map() };
  products.forEach((product) => {
    const attrs = Object.values(mergedProductAttributes(product, product.listIds || [])).join(" ");
    const profile = extractClassificationProfile(`${product.name} ${attrs}`);
    Object.keys(counts).forEach((kind) => {
      (profile[kind] || []).forEach((value) => counts[kind].set(value, (counts[kind].get(value) || 0) + 1));
    });
  });
  const threshold = Math.max(1, Math.ceil(products.length * 0.34));
  const merged = {};
  Object.entries(counts).forEach(([kind, map]) => {
    merged[kind] = [...map.entries()]
      .filter(([, count]) => count >= threshold || products.length === 1)
      .sort((a, b) => b[1] - a[1])
      .map(([value]) => value);
  });
  merged.counts = counts;
  return merged;
}

function profileSignature(product) {
  const profile = extractClassificationProfile(product.name);
  return [
    profile.material[0] || "material?",
    profile.system[0] || "sistema?",
    profile.piece[0] || "pieza?"
  ].join("|");
}

function groupAssistantProducts(products) {
  const groups = new Map();
  products.forEach((product) => {
    const signature = profileSignature(product);
    if (!groups.has(signature)) groups.set(signature, []);
    groups.get(signature).push(product);
  });
  const ordered = [...groups.entries()]
    .map(([signature, items]) => ({ signature, products: items }))
    .sort((a, b) => b.products.length - a.products.length);
  if (ordered.length <= 6) return ordered;
  const visible = ordered.slice(0, 5);
  visible.push({
    signature: "otros perfiles",
    products: ordered.slice(5).flatMap((group) => group.products)
  });
  return visible;
}

function buildAssistantNodeIndex() {
  const map = new Map(activeNodes().map((node) => [node.id, []]));
  map.directCounts = new Map(activeNodes().map((node) => [node.id, 0]));
  const nodes = nodeById();
  data.products.forEach((product) => {
    const assignedNode = productNode(product);
    if (map.directCounts.has(assignedNode)) {
      map.directCounts.set(assignedNode, (map.directCounts.get(assignedNode) || 0) + 1);
    }
    let current = nodes[assignedNode];
    while (current && nodeHierarchy(current) === state.activeHierarchyId) {
      const samples = map.get(current.id);
      if (samples && samples.length < 40) samples.push(product);
      current = nodes[current.parent];
    }
  });
  return map;
}

function isFinalProductDestination(node, assistantIndex = null) {
  if (!node || nodeHierarchy(node) !== state.activeHierarchyId) return false;
  const directCount = assistantIndex?.directCounts?.get(node.id) ?? directProductsInNode(node.id).length;
  return directCount > 0 || childrenOf(node.id).length === 0;
}

function nodeAssistantCorpus(node, assistantIndex) {
  const pathText = pathFor(node.id).map((item) => item.name).join(" ");
  const samples = assistantIndex?.get(node.id) || [];
  return {
    text: `${pathText} ${samples.map((product) => product.name).join(" ")}`,
    samples
  };
}

function tokenSimilarity(leftTokens, rightTokens) {
  const left = new Set(leftTokens);
  const right = new Set(rightTokens);
  if (!left.size || !right.size) return 0;
  let common = 0;
  left.forEach((token) => { if (right.has(token)) common += 1; });
  return common / Math.max(left.size, Math.min(12, right.size));
}

function nodeCandidateScore(node, products, collectiveProfile, assistantIndex, sourceNodeId = null, nodeMove = false, allowGrouping = false) {
  if (nodeHierarchy(node) !== state.activeHierarchyId) return null;
  if (sourceNodeId && node.id === sourceNodeId) return null;
  if (nodeMove && sourceNodeId && isDescendantOrSelf(node.id, sourceNodeId)) return null;
  const sourceNode = sourceNodeId ? nodeById()[sourceNodeId] : null;
  if (nodeMove && sourceNode && node.level !== sourceNode.level - 1) return null;
  if (!nodeMove && node.level < 1) return null;
  if (!nodeMove && !allowGrouping && !isFinalProductDestination(node, assistantIndex)) return null;

  const corpus = nodeAssistantCorpus(node, assistantIndex);
  const nodeProfile = extractClassificationProfile(corpus.text);
  const selectionTokens = collectiveProfile.tokens || [];
  let score = tokenSimilarity(selectionTokens, nodeProfile.tokens) * 28;
  const reasons = [];
  const weights = { material: 30, piece: 24, connection: 18, system: 26 };

  ["material", "piece", "connection", "system"].forEach((kind) => {
    const wanted = collectiveProfile[kind] || [];
    if (!wanted.length) return;
    const matches = wanted.filter((item) => nodeProfile[kind].includes(item));
    if (matches.length) {
      score += weights[kind] * (matches.length / wanted.length);
      reasons.push(`${kind === "piece" ? "tipo de pieza" : kind}: ${matches.join(", ")}`);
    } else if (nodeProfile[kind].length && ["material", "system"].includes(kind)) {
      score -= 18;
    }
  });

  if (!nodeMove) score += node.level === 3 ? 9 : node.level === 2 ? 5 : 0;
  if (corpus.samples.length) score += Math.min(10, corpus.samples.length / 4);
  if (sourceNodeId && node.id === nodeById()[sourceNodeId]?.parent) score -= 24;

  const comparable = corpus.samples
    .map((product) => ({ product, similarity: tokenSimilarity(selectionTokens, classificationTokens(product.name)) }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 3)
    .map((item) => item.product);

  return {
    type: "existing",
    nodeId: node.id,
    path: pathFor(node.id).map((item) => item.name).join(" / "),
    score: Math.max(0, Math.round(score)),
    reasons,
    comparable,
    existing: true,
    destinationKind: !nodeMove
      ? ((assistantIndex?.directCounts?.get(node.id) || 0) > 0 ? "Nodo con productos" : "Nodo final")
      : "Contenedor estructural"
  };
}

function assistantConfidence(score, comparableCount = 0) {
  if (score >= 68 && comparableCount > 0) return "high";
  if (score >= 40) return "medium";
  return "low";
}

function suggestedNewNodeCandidate(products, profile, bestExisting, bestContainer = null) {
  if (bestExisting?.score >= 48) return null;
  const bestNode = bestExisting ? nodeById()[bestExisting.nodeId] : null;
  const containerNode = bestContainer ? nodeById()[bestContainer.nodeId] : null;
  const parent = containerNode?.level < 3
    ? containerNode
    : (bestNode?.level < 3 ? bestNode : nodeById()[bestNode?.parent]);
  if (!parent || parent.level >= 3) return null;
  const piece = profile.piece?.[0] || "Productos";
  const material = profile.material?.[0] || profile.system?.[0] || "Especiales";
  const name = `${piece}${piece.endsWith("s") ? "" : "s"} ${material}`.trim();
  return {
    type: "new",
    parentId: parent.id,
    name,
    path: `${pathFor(parent.id).map((item) => item.name).join(" / ")} / ${name}`,
    score: Math.max(30, (bestExisting?.score || bestContainer?.score || 25) + 5),
    reasons: ["El mejor contenedor es un nodo agrupador; se propone crear dentro un nodo final para alojar productos."],
    comparable: [],
    existing: false,
    destinationKind: "Nuevo nodo final"
  };
}

function analyzeAssistantGroup(products, sourceNodeId = null, nodeMove = false, assistantIndex = null) {
  const profile = mergeClassificationProfiles(products);
  profile.tokens = classificationTokens(products.map((product) => product.name).join(" "));
  const nodeIndex = assistantIndex || buildAssistantNodeIndex();
  const candidates = activeNodes()
    .map((node) => nodeCandidateScore(node, products, profile, nodeIndex, sourceNodeId, nodeMove))
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  const bestContainer = !nodeMove
    ? activeNodes()
      .filter((node) => childrenOf(node.id).length > 0 && !isFinalProductDestination(node, nodeIndex))
      .map((node) => nodeCandidateScore(node, products, profile, nodeIndex, sourceNodeId, false, true))
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)[0]
    : null;
  const newCandidate = !nodeMove ? suggestedNewNodeCandidate(products, profile, candidates[0], bestContainer) : null;
  if (newCandidate) candidates.push(newCandidate);
  while (candidates.length < 3) {
    const sourceNode = sourceNodeId ? nodeById()[sourceNodeId] : null;
    const fallback = activeNodes().find((node) =>
      !candidates.some((candidate) => candidate.nodeId === node.id)
      && (!sourceNodeId || node.id !== sourceNodeId)
      && (!nodeMove || !sourceNodeId || !isDescendantOrSelf(node.id, sourceNodeId))
      && (!nodeMove || (sourceNode && node.level === sourceNode.level - 1))
      && (nodeMove || isFinalProductDestination(node, nodeIndex))
    );
    if (!fallback) break;
    candidates.push({
      type: "existing",
      nodeId: fallback.id,
      path: pathFor(fallback.id).map((item) => item.name).join(" / "),
      score: 10,
      reasons: ["Alternativa estructural disponible; requiere revision manual."],
      comparable: productsUnderNode(fallback.id).slice(0, 3),
      existing: true,
      destinationKind: nodeMove
        ? "Contenedor estructural"
        : ((nodeIndex.directCounts?.get(fallback.id) || 0) > 0 ? "Nodo con productos" : "Nodo final")
    });
  }
  candidates.forEach((candidate) => {
    candidate.confidence = assistantConfidence(candidate.score, candidate.comparable.length);
  });
  return { products, profile, candidates: candidates.slice(0, 3) };
}

function assistantSelection() {
  const checkedIds = [...state.selectedProducts];
  if (checkedIds.length) {
    return {
      type: "products",
      products: checkedIds.map((id) => data.products.find((product) => product.id === id)).filter(Boolean),
      sourceNodeId: null
    };
  }
  if (state.selectedProduct) {
    const product = data.products.find((item) => item.id === state.selectedProduct);
    if (product) return { type: "products", products: [product], sourceNodeId: null };
  }
  if (state.selectedNode && state.selectedNode !== UNCLASSIFIED_NODE_ID) {
    return {
      type: "node",
      products: productsUnderNode(state.selectedNode),
      sourceNodeId: state.selectedNode
    };
  }
  if (state.selectedNode === UNCLASSIFIED_NODE_ID) {
    return { type: "products", products: activeUnclassifiedProducts(), sourceNodeId: null };
  }
  return { type: "products", products: [], sourceNodeId: null };
}

function profileSummary(profile) {
  const parts = [];
  if (profile.material?.length) parts.push(`material: ${profile.material.join(", ")}`);
  if (profile.piece?.length) parts.push(`pieza: ${profile.piece.join(", ")}`);
  if (profile.connection?.length) parts.push(`conexion: ${profile.connection.join(", ")}`);
  if (profile.system?.length) parts.push(`sistema: ${profile.system.join(", ")}`);
  return parts.length ? parts.join(" · ") : "descripcion ambigua; se priorizo similitud con el catalogo actual";
}

function confidenceLabel(confidence) {
  return confidence === "high" ? "Alta" : confidence === "medium" ? "Media" : "Baja";
}

function assistantSelectedProductsHtml(productIds = classificationAssistant.productIds) {
  const products = productIds
    .map((id) => data.products.find((product) => product.id === id))
    .filter(Boolean);
  const visibleProducts = products.slice(0, 250);
  const rows = visibleProducts.map((product) => {
    const assignedNode = nodeById()[productNode(product)];
    const route = assignedNode
      ? pathFor(assignedNode.id).map((node) => node.name).join(" / ")
      : "No clasificado";
    return `
      <div class="assistant-selection-row">
        <strong>${escapeHtml(product.id)}</strong>
        <span class="assistant-selection-name">${escapeHtml(product.name)}</span>
        <span class="assistant-selection-route">${escapeHtml(route)}</span>
      </div>
    `;
  }).join("");
  const limitNote = products.length > visibleProducts.length
    ? `<div class="assistant-selection-limit">Mostrando los primeros ${visibleProducts.length} de ${products.length} productos.</div>`
    : "";
  return `
    <details class="assistant-selection" ${products.length <= 8 ? "open" : ""}>
      <summary>
        <span>
          <strong>Productos analizados</strong>
          <small>${products.length} seleccionado(s)</small>
        </span>
        <span class="assistant-selection-toggle">${products.length <= 8 ? "Ocultar" : "Ver productos"}</span>
      </summary>
      <div class="assistant-selection-list">
        ${rows || `<div class="assistant-selection-empty">No se encontraron productos en la seleccion actual.</div>`}
      </div>
      ${limitNote}
    </details>
  `;
}

function candidateCardHtml(candidate, analysisIndex, candidateIndex, nodeMode = false) {
  const samples = candidate.comparable.length
    ? candidate.comparable.map((product) => `<li><strong>${escapeHtml(product.id)}</strong> ${escapeHtml(product.name)}</li>`).join("")
    : "<li>Sin productos comparables directos.</li>";
  const reasons = candidate.reasons.length ? candidate.reasons.join("; ") : "Coincidencia general con el contenido y la ruta.";
  return `
    <article class="assistant-candidate confidence-${candidate.confidence}">
      <div class="assistant-candidate-head">
        <div>
          <span class="assistant-existing">${escapeHtml(candidate.destinationKind || (candidate.existing ? "Nodo existente" : "Nodo nuevo propuesto"))}</span>
          <h3>${escapeHtml(candidate.path)}</h3>
        </div>
        <span class="confidence-pill ${candidate.confidence}">${confidenceLabel(candidate.confidence)}</span>
      </div>
      <p>${escapeHtml(reasons)}</p>
      <div class="assistant-comparables">
        <strong>Productos de referencia</strong>
        <ul>${samples}</ul>
      </div>
      <div class="assistant-actions">
        ${candidate.existing ? `<button class="ghost-btn" data-assistant-view="${analysisIndex}:${candidateIndex}">Ver contenido</button>` : ""}
        <button class="primary-btn" data-assistant-move="${analysisIndex}:${candidateIndex}">${candidate.existing ? (nodeMode ? "Mover nodo aqui" : "Mover seleccion aqui") : "Crear nodo y mover"}</button>
        ${nodeMode ? `<button class="ghost-btn" data-assistant-partial="${analysisIndex}:${candidateIndex}">Mover solo productos</button>` : `<button class="ghost-btn" data-assistant-partial="${analysisIndex}:${candidateIndex}">Mover solo algunos</button>`}
      </div>
    </article>
  `;
}

function assistantProposalHtml() {
  const selectionCount = classificationAssistant.productIds.length;
  const source = classificationAssistant.sourceNodeId ? nodeById()[classificationAssistant.sourceNodeId] : null;
  const intro = source
    ? `El nodo <strong>${escapeHtml(source.name)}</strong> contiene ${selectionCount} producto(s). Se evaluo su perfil colectivo y los contenedores compatibles con su nivel.`
    : `Se analizaron ${selectionCount} producto(s) usando material, tipo de pieza, conexion, sistema y productos existentes en la jerarquia.`;
  const groupedWarning = classificationAssistant.grouped && !classificationAssistant.forceTogether
    ? `<div class="assistant-warning"><strong>La seleccion es heterogenea.</strong><span>Se separo en grupos naturales para evitar mezclar materiales, sistemas o piezas incompatibles.</span><button class="ghost-btn" data-assistant-force-together>Analizar todo junto de todas formas</button></div>`
    : "";
  const sections = classificationAssistant.analyses.map((analysis, analysisIndex) => `
    <section class="assistant-group">
      <div class="assistant-group-head">
        <div>
          <strong>${classificationAssistant.analyses.length > 1 ? `Grupo ${analysisIndex + 1}` : "Seleccion analizada"}</strong>
          <span>${analysis.products.length} producto(s) · ${escapeHtml(profileSummary(analysis.profile))}</span>
        </div>
      </div>
      <div class="assistant-candidates">
        ${analysis.candidates.map((candidate, candidateIndex) => candidateCardHtml(candidate, analysisIndex, candidateIndex, classificationAssistant.allowWholeNodeMove)).join("")}
      </div>
    </section>
  `).join("");
  return `
    <div class="assistant-summary">${intro}</div>
    ${assistantSelectedProductsHtml()}
    ${groupedWarning}
    ${classificationAssistant.externalInsight ? `<div class="assistant-ai-note"><strong>Sugerida por IA</strong><span>${escapeHtml(classificationAssistant.externalInsight)}</span></div>` : ""}
    ${sections}
    <div class="assistant-engine-note">
      <span>Analisis local sobre la jerarquia actual.</span>
      <button class="ghost-btn" data-assistant-ai ${typeof window.catalogClassificationAI === "function" ? "" : "disabled"}>Consultar IA externa</button>
    </div>
  `;
}

function renderAssistantProposalModal() {
  $("modalTitle").textContent = "Destinos sugeridos";
  $("modalBody").innerHTML = assistantProposalHtml();
  $("modalConfirm").textContent = "Cerrar";
  $("modalConfirm").hidden = false;
  $("modalCancel").hidden = true;
}

function openClassificationAssistant(forceTogether = false) {
  const selection = assistantSelection();
  if (!selection.products.length) {
    openModal("Destinos sugeridos", `<div class="load-error"><strong>Seleccion requerida</strong><span>Selecciona uno o mas productos, o un nodo con productos.</span></div>`, () => {}, { confirmText: "Aceptar", hideCancel: true });
    return;
  }
  classificationAssistant.selectionType = selection.type;
  classificationAssistant.productIds = selection.products.map((product) => product.id);
  classificationAssistant.sourceNodeId = selection.sourceNodeId;
  classificationAssistant.forceTogether = forceTogether;
  if (!forceTogether) classificationAssistant.externalInsight = null;
  const groups = groupAssistantProducts(selection.products);
  classificationAssistant.grouped = groups.length > 1;
  const analysisGroups = classificationAssistant.grouped && !forceTogether ? groups : [{ products: selection.products }];
  const sourceNode = selection.sourceNodeId ? nodeById()[selection.sourceNodeId] : null;
  classificationAssistant.allowWholeNodeMove = selection.type === "node"
    && analysisGroups.length === 1
    && !!sourceNode
    && sourceNode.level > 0;
  const assistantIndex = buildAssistantNodeIndex();
  classificationAssistant.analyses = analysisGroups.map((group) =>
    analyzeAssistantGroup(group.products, selection.sourceNodeId, classificationAssistant.allowWholeNodeMove, assistantIndex)
  );
  openModal("Destinos sugeridos", assistantProposalHtml(), () => {}, { confirmText: "Cerrar", hideCancel: true });
}

function assistantCandidate(ref) {
  const [analysisIndex, candidateIndex] = String(ref).split(":").map(Number);
  const analysis = classificationAssistant.analyses[analysisIndex];
  const candidate = analysis?.candidates[candidateIndex];
  return { analysisIndex, candidateIndex, analysis, candidate };
}

function assistantViewCandidate(ref) {
  const { analysisIndex, candidateIndex, analysis, candidate } = assistantCandidate(ref);
  if (!candidate?.nodeId) return;
  classificationAssistant.activeAnalysisIndex = analysisIndex;
  classificationAssistant.activeCandidateIndex = candidateIndex;
  const node = nodeById()[candidate.nodeId];
  const childRows = childrenOf(node.id).map((child) => `
    <div class="move-product"><strong>${escapeHtml(child.name)}</strong><span>${countProducts(child.id)} producto(s)</span></div>
  `).join("");
  const directRows = directProductsInNode(node.id).map((product) => `
    <div class="move-product"><strong>${escapeHtml(product.name)}</strong><span>${escapeHtml(product.id)}</span></div>
  `).join("");
  $("modalTitle").textContent = "Contenido del nodo candidato";
  $("modalBody").innerHTML = `
    <div class="assistant-summary"><strong>${escapeHtml(candidate.path)}</strong><span>${countProducts(node.id)} producto(s) en total.</span></div>
    ${assistantSelectedProductsHtml(analysis.products.map((product) => product.id))}
    <div class="assistant-node-content">
      <section><h3>Subnodos</h3><div class="assistant-scroll-list">${childRows || "<p>Sin subnodos.</p>"}</div></section>
      <section><h3>Productos directos</h3><div class="assistant-scroll-list">${directRows || "<p>Sin productos directos.</p>"}</div></section>
    </div>
    <div class="assistant-actions">
      <button class="ghost-btn" data-assistant-back>Volver a propuestas</button>
      <button class="primary-btn" data-assistant-move="${analysisIndex}:${candidateIndex}">Confirmar movimiento a este nodo</button>
    </div>
  `;
  $("modalConfirm").hidden = true;
}

function assistantPartialSelection(ref) {
  const { analysisIndex, candidateIndex, analysis, candidate } = assistantCandidate(ref);
  if (!candidate || !analysis) return;
  const rows = analysis.products.map((product) => `
    <label class="assistant-product-choice">
      <input type="checkbox" data-assistant-product="${escapeHtml(product.id)}" checked>
      <span><strong>${escapeHtml(product.id)}</strong>${escapeHtml(product.name)}</span>
    </label>
  `).join("");
  $("modalTitle").textContent = "Mover parte de la seleccion";
  $("modalBody").innerHTML = `
    <div class="assistant-summary"><strong>Destino: ${escapeHtml(candidate.path)}</strong><span>Desmarca los productos que deben permanecer en su ubicacion actual.</span></div>
    <div class="assistant-product-list">${rows}</div>
    <div class="assistant-actions">
      <button class="ghost-btn" data-assistant-back>Volver a propuestas</button>
      <button class="primary-btn" data-assistant-confirm-partial="${analysisIndex}:${candidateIndex}">Mover productos marcados</button>
    </div>
  `;
  $("modalConfirm").hidden = true;
}

function assistantConfirmMove(ref, productIds = null) {
  const { analysisIndex, candidateIndex, analysis, candidate } = assistantCandidate(ref);
  if (!candidate || !analysis) return;
  const ids = productIds || analysis.products.map((product) => product.id);
  const movingWholeNode = classificationAssistant.selectionType === "node"
    && classificationAssistant.allowWholeNodeMove
    && ids.length === classificationAssistant.productIds.length
    && candidate.type === "existing";
  if (candidate.type === "existing" && !movingWholeNode) {
    const targetNode = nodeById()[candidate.nodeId];
    if (!isFinalProductDestination(targetNode)) {
      showToast("Destino no permitido", "Los productos solo pueden asignarse a nodos finales o nodos que ya contienen productos directamente.");
      renderAssistantProposalModal();
      return;
    }
  }
  classificationAssistant.activeAnalysisIndex = analysisIndex;
  classificationAssistant.activeCandidateIndex = candidateIndex;
  $("modalTitle").textContent = "Confirmar movimiento sugerido";
  $("modalBody").innerHTML = `
    <div class="load-error">
      <strong>Antes de mover</strong>
      <span>Se moveran ${ids.length} producto(s) hacia ${escapeHtml(candidate.path)}.</span>
    </div>
    <div class="assistant-summary">
      <span>${candidate.existing ? "Se utilizara el nodo existente." : `Se creara el nodo "${escapeHtml(candidate.name)}" antes del movimiento.`}</span>
    </div>
    <div class="assistant-actions">
      <button class="ghost-btn" data-assistant-back>Volver</button>
      <button class="primary-btn" data-assistant-execute="${analysisIndex}:${candidateIndex}" data-assistant-ids="${escapeHtml(ids.join("|"))}">Confirmar y mover</button>
    </div>
  `;
  $("modalConfirm").hidden = true;
}

function recordAssistantDecision(candidate, ids, action) {
  data.assistantDecisions = data.assistantDecisions || [];
  data.assistantDecisions.unshift({
    at: new Date().toISOString(),
    hierarchyId: state.activeHierarchyId,
    productIds: ids,
    action,
    targetNodeId: candidate.nodeId || null,
    proposedNodeName: candidate.name || null,
    confidence: candidate.confidence,
    score: candidate.score
  });
  data.assistantDecisions = data.assistantDecisions.slice(0, 1000);
}

function executeAssistantMove(ref, ids) {
  const { candidate } = assistantCandidate(ref);
  if (!candidate || !ids.length) return;
  let targetId = candidate.nodeId;
  const moveWholeNode = classificationAssistant.selectionType === "node"
    && classificationAssistant.allowWholeNodeMove
    && ids.length === classificationAssistant.productIds.length
    && candidate.type === "existing";
  if (!moveWholeNode && candidate.type === "existing" && !isFinalProductDestination(nodeById()[targetId])) {
    showToast("Destino no permitido", "Este nodo solo agrupa subnodos. Elige un nodo final o crea un subnodo final.");
    renderAssistantProposalModal();
    return;
  }
  pushHistory("movimiento sugerido");
  if (candidate.type === "new") {
    targetId = `n-${Date.now()}`;
    const parent = nodeById()[candidate.parentId];
    data.nodes.push({
      id: targetId,
      parent: candidate.parentId,
      level: Math.min(3, (parent?.level ?? -1) + 1),
      name: candidate.name,
      hierarchyId: state.activeHierarchyId,
      order: nextNodeOrder(state.activeHierarchyId, candidate.parentId)
    });
    candidate.nodeId = targetId;
    if (candidate.parentId) state.expandedNodes.add(candidate.parentId);
  }

  const sourceNode = classificationAssistant.sourceNodeId ? nodeById()[classificationAssistant.sourceNodeId] : null;
  if (moveWholeNode && sourceNode) {
    sourceNode.parent = targetId;
    sourceNode.order = nextNodeOrder(state.activeHierarchyId, targetId, sourceNode.id);
    state.selectedNode = sourceNode.id;
  } else {
    ids.forEach((id) => {
      const product = data.products.find((item) => item.id === id);
      if (!product) return;
      product.assignments = product.assignments || {};
      product.assignments[state.activeHierarchyId] = targetId;
      product.node = targetId;
      product.status = "corrected";
    });
    state.selectedProducts.clear();
  }
  recordAssistantDecision(candidate, ids, moveWholeNode ? "move_node" : candidate.type === "new" ? "create_and_move" : "move_products");
  invalidateRenderCache();
  const targetPath = pathFor(targetId).map((node) => node.name).join(" / ");
  addChange(
    candidate.type === "new" ? "Nodo sugerido creado" : "Movimiento sugerido aplicado",
    `${moveWholeNode ? `Nodo "${sourceNode.name}"` : `${ids.length} producto(s)`} movido(s) a ${targetPath}. Puedes deshacer esta accion.`
  );
  closeModal();
  renderAll();
}

async function consultExternalClassificationAI() {
  if (typeof window.catalogClassificationAI !== "function") return;
  const products = classificationAssistant.productIds
    .map((id) => data.products.find((product) => product.id === id))
    .filter(Boolean)
    .slice(0, 80)
    .map((product) => ({ cod: product.id, nom: product.name }));
  const tree = activeNodes().map((node) => ({
    id: node.id,
    name: node.name,
    level: node.level,
    parentId: node.parent || ""
  }));
  setProcessingState(true, "Consultando IA externa...");
  try {
    const result = await window.catalogClassificationAI({ products, tree, hierarchyId: state.activeHierarchyId });
    classificationAssistant.externalInsight = cellText(result?.summary || result?.reason || result);
    renderAssistantProposalModal();
  } finally {
    setProcessingState(false);
  }
}

function moveProducts(productIds) {
  if (!productIds.length) return;
  const first = data.products.find((p) => p.id === productIds[0]);
  const hasValidated = productIds.some((id) => data.products.find((p) => p.id === id)?.status === "validated");
  if (hasValidated && !confirm("Hay productos validados en la seleccion. ¿Seguro que quieres moverlos?")) return;
  moveState.mode = "product";
  moveState.allowedTarget = null;
  moveState.sourceNode = null;
  moveState.targetNode = state.selectedNode || first?.node || data.nodes[0].id;
  moveState.expandedNodes = new Set(pathFor(moveState.targetNode).map((n) => n.id));
  openModal("Mover productos", `
    <div class="move-target">
      <strong>Destino seleccionado</strong>
      <div id="moveTargetSummary"></div>
    </div>
    <div class="move-layout">
      <div class="move-tree">
        <div class="move-column-head">
          <strong>Navegar jerarquia</strong>
          <span>Abre niveles y elige donde dejar los productos</span>
        </div>
        <div class="move-tree-list" id="moveTreeList"></div>
      </div>
      <div class="move-preview">
        <div class="move-column-head">
          <strong>Productos en destino</strong>
          <span>Referencia para validar que el lugar calza</span>
        </div>
        <div class="move-preview-list" id="movePreviewList"></div>
      </div>
    </div>
  `, () => {
    const target = moveState.targetNode;
    if (!target) return;
    pushHistory("mover productos");
    productIds.forEach((id) => {
      const p = data.products.find((x) => x.id === id);
      if (p) {
        p.assignments = p.assignments || {};
        p.assignments[state.activeHierarchyId] = target;
        p.node = target;
        p.status = "corrected";
      }
    });
    state.selectedProducts.clear();
    addChange("Movimiento por lote", `${productIds.length} producto(s) movidos a "${nodeById()[target].name}".`);
  });
  renderMoveBrowser();
}
function validateProducts(ids) {
  if (!ids.length) return;
  pushHistory("validar productos");
  ids.forEach((id) => {
    const p = data.products.find((x) => x.id === id);
    if (p) p.status = "validated";
  });
  addChange("Validacion", `${ids.length} producto(s) marcados como validados.`);
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-assistant-force-together]")) {
    openClassificationAssistant(true);
    return;
  }
  if (event.target.closest("[data-assistant-back]")) {
    renderAssistantProposalModal();
    return;
  }
  const assistantView = event.target.closest("[data-assistant-view]");
  if (assistantView) {
    assistantViewCandidate(assistantView.dataset.assistantView);
    return;
  }
  const assistantPartial = event.target.closest("[data-assistant-partial]");
  if (assistantPartial) {
    assistantPartialSelection(assistantPartial.dataset.assistantPartial);
    return;
  }
  const assistantMove = event.target.closest("[data-assistant-move]");
  if (assistantMove) {
    assistantConfirmMove(assistantMove.dataset.assistantMove);
    return;
  }
  const assistantConfirmPartial = event.target.closest("[data-assistant-confirm-partial]");
  if (assistantConfirmPartial) {
    const ids = [...document.querySelectorAll("[data-assistant-product]:checked")].map((input) => input.dataset.assistantProduct);
    if (!ids.length) {
      showToast("Sin productos marcados", "Marca al menos un producto para mover.");
      return;
    }
    assistantConfirmMove(assistantConfirmPartial.dataset.assistantConfirmPartial, ids);
    return;
  }
  const assistantExecute = event.target.closest("[data-assistant-execute]");
  if (assistantExecute) {
    const ids = cellText(assistantExecute.dataset.assistantIds).split("|").filter(Boolean);
    executeAssistantMove(assistantExecute.dataset.assistantExecute, ids);
    return;
  }
  if (event.target.closest("[data-assistant-ai]")) {
    consultExternalClassificationAI().catch((error) => showToast("IA no disponible", error.message || String(error)));
    return;
  }
  const filterBtn = event.target.closest("[data-filter-kind]");
  if (filterBtn) {
    event.stopPropagation();
    openColumnFilterMenu(filterBtn.dataset.filterKind, filterBtn.dataset.filterKey, filterBtn);
    return;
  }
  const filterMenu = event.target.closest(".column-filter-menu");
  if (filterMenu) {
    if (event.target.closest("[data-filter-clear]")) {
      const kind = filterMenu.dataset.kind;
      const key = filterMenu.dataset.key;
      delete filterBag(kind)[key];
      closeColumnFilterMenu();
      if (kind === "list") renderListView();
      else {
        renderHeader();
        renderProducts();
        renderInspector();
      }
      setActionStates();
      return;
    }
    if (event.target.closest("[data-filter-apply]")) {
      applyColumnFilter(filterMenu.dataset.kind, filterMenu.dataset.key, filterMenu);
      return;
    }
    return;
  }
  closeColumnFilterMenu();
  const viewTab = event.target.closest("[data-view-tab]");
  if (viewTab) {
    viewTab.classList.add("just-clicked");
    state.activeView = viewTab.dataset.viewTab;
    document.querySelector(".nav-menu-wrap")?.classList.remove("open");
    renderAll();
    if (state.activeView === "users") loadAdminUsers();
    window.setTimeout(() => {
      viewTab.classList.remove("just-clicked");
    }, 90);
    return;
  }
  if (event.target.closest("#mainMenuBtn")) {
    document.querySelector(".nav-menu-wrap")?.classList.toggle("open");
    return;
  }
  if (event.target.closest("#hierarchyActionsBtn")) {
    toggleHierarchyActions();
    return;
  }
  if (!event.target.closest(".nav-menu-wrap")) {
    document.querySelector(".nav-menu-wrap")?.classList.remove("open");
  }
  if (!event.target.closest(".hierarchy-actions-wrap")) {
    $("hierarchyActionsMenu")?.classList.remove("open");
  }
  const sortBtn = event.target.closest("[data-sort]");
  if (sortBtn) {
    const sort = state.activeView === "lists" ? state.listSort : state.productSort;
    if (sort.key === sortBtn.dataset.sort) sort.dir = sort.dir === "asc" ? "desc" : "asc";
    else {
      sort.key = sortBtn.dataset.sort;
      sort.dir = "asc";
    }
    if (state.activeView === "lists") state.listRenderLimit = TABLE_RENDER_BATCH;
    else state.productRenderLimit = TABLE_RENDER_BATCH;
    if (state.activeView === "lists") renderListView();
    else renderProducts();
    setActionStates();
    return;
  }
  if (event.target.closest("[data-load-more-products]")) {
    state.productRenderLimit += TABLE_RENDER_BATCH;
    renderProducts();
    return;
  }
  if (event.target.closest("[data-load-more-list]")) {
    state.listRenderLimit += TABLE_RENDER_BATCH;
    renderListView();
    return;
  }
  const loadCard = event.target.closest("[data-load-type]");
  if (loadCard) {
    document.querySelectorAll(".load-card").forEach((card) => card.classList.toggle("active", card === loadCard));
    renderLoadConfig(loadCard.dataset.loadType);
    return;
  }
  const userEdit = event.target.closest("[data-user-edit]");
  if (userEdit) {
    openUserModal(userEdit.dataset.userEdit);
    return;
  }
  const userToggle = event.target.closest("[data-user-toggle]");
  if (userToggle) {
    toggleAdminUser(userToggle.dataset.userToggle);
    return;
  }
  if (event.target.closest("[data-clear-local-state]")) {
    clearLocalCatalogState();
    return;
  }
  if (event.target.closest("[data-copy-load-debug]")) {
    copyLoadDebug();
    return;
  }
  const exportBtn = event.target.closest("[data-export-kind]");
  if (exportBtn) {
    exportCurrent(exportBtn.dataset.exportKind);
    return;
  }
  if (event.target.closest("[data-operation-cancel]")) {
    cancelOperation();
    return;
  }
  if (event.target.closest("[data-operation-confirm]")) {
    confirmOperation();
    return;
  }
  const targetToggle = event.target.closest("[data-target-toggle]");
  if (targetToggle) {
    event.stopPropagation();
    const id = targetToggle.dataset.targetToggle;
    if (state.operation.targetExpandedNodes.has(id)) state.operation.targetExpandedNodes.delete(id);
    else state.operation.targetExpandedNodes.add(id);
    renderTargetTree();
    return;
  }
  const targetNode = event.target.closest("[data-target-node]");
  if (targetNode) {
    state.operation.targetNode = targetNode.dataset.targetNode;
    state.activePane = "target";
    if (childrenOf(state.operation.targetNode).length && !state.operation.targetExpandedNodes.has(state.operation.targetNode)) {
      state.operation.targetExpandedNodes.add(state.operation.targetNode);
    }
    if (state.operation.type === "merge") {
      const source = nodeById()[state.operation.sourceNode];
      const target = nodeById()[state.operation.targetNode];
      if (source && target) state.operation.mergeName = `${source.name} y ${target.name}`;
    }
    state.selectedProducts.clear();
    renderAll();
    return;
  }
  const toggle = event.target.closest("[data-toggle-node]");
  if (toggle) {
    event.stopPropagation();
    const id = toggle.dataset.toggleNode;
    if (state.expandedNodes.has(id)) state.expandedNodes.delete(id);
    else state.expandedNodes.add(id);
    renderTree();
    return;
  }
  const moveToggle = event.target.closest("[data-move-toggle]");
  if (moveToggle) {
    event.stopPropagation();
    const id = moveToggle.dataset.moveToggle;
    if (moveState.expandedNodes.has(id)) moveState.expandedNodes.delete(id);
    else moveState.expandedNodes.add(id);
    renderMoveBrowser();
    return;
  }
  const moveNode = event.target.closest("[data-move-node]");
  if (moveNode) {
    if (moveNode.disabled) return;
    moveState.targetNode = moveNode.dataset.moveNode;
    if (childrenOf(moveState.targetNode).length && !moveState.expandedNodes.has(moveState.targetNode)) {
      moveState.expandedNodes.add(moveState.targetNode);
    }
    renderMoveBrowser();
    return;
  }
  const nodeBtn = event.target.closest("[data-node]");
  if (nodeBtn) {
    state.selectedNode = nodeBtn.dataset.node;
    state.activePane = "source";
    if (state.operation.type) {
      state.operation.sourceNode = state.selectedNode;
      state.operation.targetNode = null;
      state.operation.mergeName = "";
    }
    state.selectedProducts.clear();
    state.productRenderLimit = TABLE_RENDER_BATCH;
    renderAll();
    return;
  }
  const row = event.target.closest("[data-product]");
  if (row && row.closest("#productRows") && !event.target.matches("input[type='checkbox']")) {
    return;
  }
  if (row && !row.closest("#listRows") && !event.target.matches("input[type='checkbox']")) {
    state.selectedProduct = state.selectedProduct === row.dataset.product ? null : row.dataset.product;
    updateProductRowSelection();
    renderInspector();
    setActionStates();
    return;
  }
  const action = event.target.dataset.action;
  if (action) {
    if (action === "close-inspector") {
      state.selectedProduct = null;
      updateProductRowSelection();
      renderInspector();
      return;
    }
    const p = data.products.find((x) => x.id === state.selectedProduct);
    if (!p) return;
    if (action === "suggest-destination") {
      openClassificationAssistant();
      return;
    }
    if (action === "validate-product") validateProducts([p.id]);
    if (action === "move-product") moveProducts([p.id]);
    if (action === "apply-suggestion" && p.suggestion) {
      pushHistory("aplicar sugerencia");
      p.assignments = p.assignments || {};
      p.assignments[state.activeHierarchyId] = p.suggestion;
      p.node = p.suggestion;
      p.status = "corrected";
      addChange("Sugerencia aplicada", `${p.id} movido a "${nodeById()[p.node].name}".`);
    }
    if (action === "mark-pending") {
      pushHistory("marcar pendiente");
      p.status = "pending";
      addChange("Pendiente", `${p.id} queda pendiente de revision.`);
    }
    renderAll();
  }
});

$("productRows").addEventListener("click", (event) => {
  if (event.target.matches("input[type='checkbox']")) return;
  const row = event.target.closest("[data-product]");
  if (!row) return;
  event.stopPropagation();
  state.selectedProduct = state.selectedProduct === row.dataset.product ? null : row.dataset.product;
  updateProductRowSelection();
  renderInspector();
  setActionStates();
});

document.addEventListener("change", (event) => {
  const filterValue = event.target.closest("[data-filter-value]");
  if (filterValue) {
    const menu = event.target.closest(".column-filter-menu");
    if (menu) {
      menu._selectedValues = menu._selectedValues || new Set();
      if (filterValue.checked) menu._selectedValues.add(filterValue.value);
      else menu._selectedValues.delete(filterValue.value);
    }
    return;
  }
  if (event.target.id === "selectAll") {
    const ids = visibleProductIds();
    const checked = event.target.checked;
    ids.forEach((id) => checked ? state.selectedProducts.add(id) : state.selectedProducts.delete(id));
    updateVisibleCheckboxes(checked);
    syncSelectAllState(ids);
    setActionStates();
    return;
  }
  const check = event.target.dataset.check;
  if (check) {
    if (event.target.checked) state.selectedProducts.add(check);
    else state.selectedProducts.delete(check);
    syncSelectAllState();
    setActionStates();
    return;
  }
  if (event.target.id === "mergeLocationSelect") {
    state.operation.mergeLocation = event.target.value;
    renderOperationCard();
  }
  if (event.target.id?.startsWith("colRole")) {
    refreshHierarchyMappingOptions();
  }
  if (event.target.id?.startsWith("productRole")) {
    refreshProductMappingOptions();
  }
  if (["loadMode", "hierarchyProductAction", "hierarchyUnifiedAction", "productListAction", "hierarchyLoadShape", "productTableShape"].includes(event.target.id)) {
    syncLoadActionFields();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-filter-search]")) {
    const menu = event.target.closest(".column-filter-menu");
    if (menu) refreshColumnFilterOptions(menu, menu.dataset.kind, menu.dataset.key);
    return;
  }
  if (event.target.id === "mergeNameInput") {
    state.operation.mergeName = event.target.value;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || $("modalBackdrop").hidden) return;
  if (event.target && event.target.tagName === "TEXTAREA") return;
  const confirmBtn = $("modalConfirm");
  if (!confirmBtn || confirmBtn.disabled || confirmBtn.hidden) return;
  event.preventDefault();
  confirmBtn.click();
});

$("hierarchySelect").addEventListener("change", (e) => {
  state.activeHierarchyId = e.target.value;
  state.selectedNode = null;
  state.selectedProduct = null;
  state.selectedProducts.clear();
  state.productRenderLimit = TABLE_RENDER_BATCH;
  state.expandedNodes = new Set(activeNodes().filter((node) => node.level < 2).map((node) => node.id));
  ensureCatalogLinkedList();
  markDataDirty();
  cancelOperation();
});
$("productListSelect").addEventListener("change", (e) => {
  state.activeProductListId = e.target.value;
  state.listSearch = "";
  state.listRenderLimit = TABLE_RENDER_BATCH;
  markDataDirty();
  renderAll();
});
$("catalogLinkedListSelect").addEventListener("change", (e) => {
  state.activeProductListId = e.target.value;
  state.selectedProduct = null;
  state.selectedProducts.clear();
  state.productRenderLimit = TABLE_RENDER_BATCH;
  markDataDirty();
  renderAll();
});
$("listConnectedHierarchySelect")?.addEventListener("change", (e) => {
  if (!e.target.value) return;
  state.activeHierarchyId = e.target.value;
  state.selectedNode = null;
  state.selectedProduct = null;
  state.selectedProducts.clear();
  state.listRenderLimit = TABLE_RENDER_BATCH;
  ensureCatalogLinkedList();
  renderAll();
});
const debouncedRenderAll = debounce(renderAll, 120);
$("treeSearch").addEventListener("input", (e) => { state.treeSearch = e.target.value; state.productRenderLimit = TABLE_RENDER_BATCH; debouncedRenderAll(); });
$("targetTreeSearch").addEventListener("input", (e) => { state.operation.targetSearch = e.target.value; debouncedRenderAll(); });
$("productSearch").addEventListener("input", (e) => { state.productSearch = e.target.value; state.productRenderLimit = TABLE_RENDER_BATCH; debouncedRenderAll(); });
$("listSearch").addEventListener("input", (e) => { state.listSearch = e.target.value; state.listRenderLimit = TABLE_RENDER_BATCH; debouncedRenderAll(); });
$("statusFilter").addEventListener("change", (e) => { state.status = e.target.value; state.productRenderLimit = TABLE_RENDER_BATCH; renderAll(); });
$("addChildBtn").addEventListener("click", () => { closeHierarchyActions(); openCreateNodeDialog(); });
$("renameNodeBtn").addEventListener("click", () => { closeHierarchyActions(); renameNode(); });
$("mergeNodeBtn").addEventListener("click", () => { closeHierarchyActions(); mergeNode(); });
$("moveNodeBtn").addEventListener("click", () => { closeHierarchyActions(); moveSelectedNode(); });
$("suggestNodeDestinationBtn").addEventListener("click", () => { closeHierarchyActions(); openClassificationAssistant(); });
$("deleteNodeBtn").addEventListener("click", () => { closeHierarchyActions(); deleteEmptyNode(); });
$("expandBranchBtn").addEventListener("click", () => expandBranch());
$("collapseBranchBtn").addEventListener("click", () => collapseBranch());
$("hideRedundantToggle").addEventListener("change", (e) => { state.hideRedundant = e.target.checked; renderAll(); });
$("undoBtn").addEventListener("click", () => { closeHierarchyActions(); undoLastChange(); });
$("redoBtn").addEventListener("click", () => { closeHierarchyActions(); redoLastChange(); });
$("moveSelectedBtn").addEventListener("click", () => moveProducts([...state.selectedProducts]));
$("suggestDestinationsBtn").addEventListener("click", () => openClassificationAssistant());
$("validateSelectedBtn").addEventListener("click", () => validateProducts([...state.selectedProducts]));
$("modalClose").addEventListener("click", closeModal);
$("modalCancel").addEventListener("click", closeModal);
$("addHierarchyLoadBtn").addEventListener("click", () => openLoadModal("hierarchy"));
$("addProductListLoadBtn").addEventListener("click", () => openLoadModal("products"));
$("exportBtn").addEventListener("click", openExportModal);
$("duplicateHierarchyBtn").addEventListener("click", () => { closeHierarchyActions(); duplicateActiveHierarchy(); });
$("deleteHierarchyBtn").addEventListener("click", () => { closeHierarchyActions(); deleteActiveHierarchy(); });
$("connectListBtn")?.addEventListener("click", connectActiveListToHierarchy);
$("disconnectCatalogListBtn")?.addEventListener("click", disconnectActiveCatalogList);
$("deleteListBtn").addEventListener("click", deleteActiveProductList);
$("connectListToSelectedHierarchyBtn").addEventListener("click", openConnectListModal);
$("disconnectListFromHierarchyBtn")?.addEventListener("click", disconnectActiveListConnection);
$("firebaseLoginBtn").addEventListener("click", loginFirebase);
$("loginGateBtn")?.addEventListener("click", loginFirebase);
$("saveFirebaseBtn")?.addEventListener("click", () => saveAdminStateToFirebase());
$("loadFirebaseBtn")?.addEventListener("click", loadAdminStateFromFirebase);
$("versionFirebaseBtn")?.addEventListener("click", () => saveAdminStateToFirebase({ createVersion: true }));
$("publishFirebaseBtn").addEventListener("click", publishToFirebase);
$("addUserBtn")?.addEventListener("click", () => openUserModal());
$("refreshUsersBtn")?.addEventListener("click", loadAdminUsers);
window.addEventListener("beforeunload", () => {
  if (dataDirty) saveLocalCatalogState();
});
window.addEventListener("catalog-admin-firebase-ready", () => {
  firebaseReady = true;
  setActionStates();
});
window.addEventListener("catalog-admin-auth", (event) => {
  firebaseReady = firebaseAvailable();
  firebaseUser = event.detail || null;
  if (!firebaseUser) {
    adminUsers = [];
    currentAdminRole = LOCAL_TEST_MODE ? "owner" : "none";
    renderUsersView();
  }
  setActionStates();
  if (firebaseUser) {
    loadAdminUsers();
    loadAdminStateFromFirebaseSilent();
  }
});

renderAll();


